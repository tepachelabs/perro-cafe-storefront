import {Link, useLoaderData} from '@remix-run/react';
import {
  CollectionConnection,
  Location,
  LocationConnection,
  Metafield,
} from '@shopify/hydrogen/storefront-api-types';
import {LoaderArgs, json} from '@shopify/remix-oxygen';

import {Hero} from '~/components/organisms/hero';
import {NavBar, NavBarLink} from '~/components/organisms/navbar';
import {Community} from '~/components/templates/community';
import {Cult} from '~/components/templates/cult';
import {Footer} from '~/components/templates/footer';
import {Menu} from '~/components/templates/menu';
import {Temple} from '~/components/templates/temple';
import configData from '~/config.json';

interface ShopifyLocation extends Location {
  schedule: Pick<Metafield, 'value'>;
}

export const meta = () => {
  return {
    title: 'Culto al Perro Café',
    description: 'A custom storefront powered by Hydrogen',
  };
};

export async function loader({context: {storefront}}: LoaderArgs) {
  const {locations} = await storefront.query<{locations: LocationConnection}>(
    LOCATIONS_QUERY,
  );
  const {collections} = await storefront.query<{
    collections: CollectionConnection;
  }>(COLLECTIONS_QUERY);

  const {nodes} = locations as LocationConnection;
  const location = nodes[0] as ShopifyLocation;

  return json({collections, location});
}

// @ts-ignore
const _Link = (props) => <NavBarLink {...props} as={Link} />;

export default function Index() {
  // lmao this is a mess
  const {
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
      src: product.variants?.nodes?.[0].image?.url,
      alt: product.title,
      width: product.variants?.nodes?.[0].image?.width,
      height: product.variants?.nodes?.[0].image?.height,
    };
  });

  const links = configData.navbar.links.map((link) => ({
    label: link.label,
    href: link.link,
    ...(link.label === 'Inicio' && {active: 'true'}),
  }));

  const cultDescription = configData.cult.description;
  const cultImages = configData.cult.images;

  const reviews = configData.reviews;

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <Hero />
      <Menu products={images} />
      <Cult images={cultImages} description={cultDescription} />
      <Temple address={location.address} schedule={location.schedule} />
      <Community reviews={reviews} />
      <Footer address={location.address} schedule={location.schedule} />
    </>
  );
}

const LOCATIONS_QUERY = `#graphql
  query Locations {
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
  }
`;

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 1, query: "web-destacados") {
      nodes {
        products(first: 4) {
          nodes {
            title
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
          }
        }
      }
    }
  }
`;
