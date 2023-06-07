import {Link, useLoaderData} from '@remix-run/react';
import {MenuItem} from '@shopify/hydrogen/storefront-api-types';

import {CustomLink} from '~/components/atoms/link';
import {Hero} from '~/components/organisms/hero';
import {NavBar} from '~/components/organisms/navbar';
import {Community} from '~/components/templates/community';
import {Cult} from '~/components/templates/cult';
import {Footer} from '~/components/templates/footer';
import {Menu} from '~/components/templates/menu';
import {Temple} from '~/components/templates/temple';
import configData from '~/config.json';

const hostname = 'perro.cafe';

// @ts-ignore
export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

// @ts-ignore
const _Link = (props) => <CustomLink {...props} as={Link} />;

export default function Index() {
  // lmao this is a mess
  const {
    menu: {items: menuItems},
    collections: {nodes},
  } = useLoaderData();

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

  const links = menuItems.map((link: MenuItem) => {
    const uri = new URL(link.url!);
    const href = uri.hostname === hostname ? uri.pathname : link.url;

    return {
      label: link.title,
      href,
      ...(link.title === 'Inicio' && {active: 'true'}),
    };
  });

  const cultDescription = configData.cult.description;
  const cultImages = configData.cult.images;

  const reviews = configData.reviews;

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <Hero />
      <Menu products={images} />
      <Cult images={cultImages} description={cultDescription} />
      <Temple />
      <Community reviews={reviews} />
      <Footer />
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
