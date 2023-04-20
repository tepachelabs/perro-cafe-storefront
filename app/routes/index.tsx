import {Link, useLoaderData} from '@remix-run/react';

import {Hero} from '~/components/organisms/hero';
import {NavBar, NavBarLink} from '~/components/organisms/navbar';
import {Community} from '~/components/templates/community/community.component';
import {Menu} from '~/components/templates/menu/menu.component';
import {Temple} from '~/components/templates/temple/temple.component';
import configData from '~/config/config.json';

export const meta = () => {
  return {
    title: 'Culto al Perro Café',
    description: 'A custom storefront powered by Hydrogen',
  };
};

// @ts-ignore
export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

// @ts-ignore
const _Link = (props) => <NavBarLink {...props} as={Link} />;

export default function Index() {
  // lmao this is a mess
  const {
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

  const links = configData.navbar.links.map((link) => ({
    label: link.label,
    href: link.link,
    ...(link.label === 'Inicio' && {active: 'true'}),
  }));

  const reviews = configData.community.reviews;

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <Hero />
      <Menu products={images} />
      <Temple />
      <Community reviews={reviews} />
    </>
  );
}

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
                    maxWidth: 100,
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
