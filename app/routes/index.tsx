import {Link, useLoaderData} from '@remix-run/react';

import {Navbar, NavBarLink} from '~/components/molecules/navbar';
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

  const links = [
    'Inicio',
    'Menú',
    'Frecuentes',
    'Tienda',
    'Contacto',
    'Facturación',
  ].map((label, index) => ({
    label,
    href: '/',
    ...(index === 0 && {active: 'true'}),
  }));

  return (
    <>
      <Navbar linkRender={_Link} links={links} />
      <LandingSkeleton images={images} />
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
