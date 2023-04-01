import {useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

import {Product} from '../../@types/globals';

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

  return (
    <section className="w-full gap-4">
      <h2>Collections</h2>
      <div>
        {products.map((product: Product) => (
          <div key={product.id}>
            {product.variants?.nodes?.[0].image && (
              <Image
                width={100}
                alt={`Image of ${product.title}`}
                data={product.variants?.nodes?.[0].image}
                sizes="(max-width: 32em) 100vw, 33vw"
                widths={[400, 500, 600, 700, 800, 900]}
                loaderOptions={{
                  scale: 2,
                  crop: 'center',
                }}
              />
            )}
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 1, query: "web-destacados") {
      nodes {
        products(first: 4) {
          nodes {
            id
            title
            variants(first: 1) {
              nodes {
                image {
                  url
                  altText
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;
