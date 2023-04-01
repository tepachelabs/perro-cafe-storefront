import {useLoaderData} from '@remix-run/react';

import {LandingSkeleton} from '~/components/templates/landing-skeleton';

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
  const imgs = products.map((product) => {
    return {
      src: product.variants?.nodes?.[0].image?.url,
      alt: product.title,
      width: product.variants?.nodes?.[0].image?.width,
      height: product.variants?.nodes?.[0].image?.height,
    };
  });

  return <LandingSkeleton images={imgs} />;
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
