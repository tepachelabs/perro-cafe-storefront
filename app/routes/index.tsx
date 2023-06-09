import {Link, useLoaderData} from '@remix-run/react';
import {
  CollectionConnection,
  Location,
  LocationConnection,
  Menu as NavigationMenu,
  Metafield,
} from '@shopify/hydrogen/storefront-api-types';
import {LoaderArgs} from '@shopify/remix-oxygen';

import {CustomLink} from '~/components/atoms/link';
import {Hero} from '~/components/organisms/hero';
import {NavBar} from '~/components/organisms/navbar';
import {Community} from '~/components/templates/community';
import {Cult} from '~/components/templates/cult';
import {Footer} from '~/components/templates/footer';
import {Menu} from '~/components/templates/menu';
import {Temple} from '~/components/templates/temple';
import configData from '~/config.json';
import {mapNavBarLinks} from '~/utils';

interface ShopifyLocation extends Location {
  schedule?: Pick<Metafield, 'value'>;
}

export async function loader({context: {storefront}}: LoaderArgs) {
  const {menu, locations, collections} = await storefront.query<{
    menu: NavigationMenu;
    locations: LocationConnection;
    collections: CollectionConnection;
  }>(COLLECTIONS_QUERY);

  const {nodes} = locations as LocationConnection;
  const location = nodes[0] as ShopifyLocation;

  return {menu: menu as NavigationMenu, collections, location};
}

// @ts-ignore
const _Link = (props) => <CustomLink {...props} as={Link} />;

export default function Index() {
  // lmao this is a mess
  const {
    menu: {items: menuItems},
    collections: {nodes},
    location,
  } = useLoaderData<typeof loader>();

  const [
    {
      products: {nodes: products},
    },
  ] = nodes;

  // @ts-ignore
  const images = products.map((product) => {
    return {
      src: product.featuredImage?.url,
      alt: product.title,
      width: product.featuredImage?.width,
      height: product.featuredImage?.height,
      onlineStoreUrl: product.onlineStoreUrl,
    };
  });

  const links = mapNavBarLinks(menuItems, 'Inicio');

  const cultDescription = configData.cult.description;
  const cultImages = configData.cult.images;

  const reviews = configData.reviews;

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <Hero />
      <Menu products={images} linkRender={_Link} />
      <Cult images={cultImages} description={cultDescription} />
      <Temple address={location?.address} schedule={location?.schedule} />
      <Community reviews={reviews} />
      <Footer address={location?.address} schedule={location?.schedule} />
    </>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    menu(handle: "storefront-menu") {
      items {
        url
        title
      }
    }
    locations(first: 1) {
      nodes {
        address {
          address1
          address2
          zip
          city
          province
        }
        schedule: metafield(namespace: "custom", key: "schedule") {
          value
        }
      }
    }
    collection(handle: "web-destacados") {
      products(first: 4) {
        nodes {
          title
          featuredImage {
            url(transform: {
              maxWidth: 300,
              maxHeight: 300,
              crop: CENTER,
            })
            altText
          }
          variants(first: 1) {
            nodes {
              image {
                url(transform: {
                  maxWidth: 300,
                  maxHeight: 300,
                  crop: CENTER
                })
                altText
              }
            }
          }
            onlineStoreUrl
        }
      }
    }
  }
`;
