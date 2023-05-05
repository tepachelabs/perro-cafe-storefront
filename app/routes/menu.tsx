import {Link, useLoaderData} from '@remix-run/react';
import type {Collection} from '@shopify/hydrogen/storefront-api-types';
import {json, type LoaderArgs} from '@shopify/remix-oxygen';

import {NavBar, NavBarLink} from '~/components/organisms/navbar';
import {Footer} from '~/components/templates/footer';
import {MenuPage} from '~/components/templates/menu-page';
import configData from '~/config.json';

export const meta = () => {
  return {
    title: 'Culto al Perro Café',
    description: 'A custom storefront powered by Hydrogen',
  };
};

export async function loader({context: {storefront}}: LoaderArgs) {
  const {collections} = await storefront.query<Array<Collection>>(
    COLLECTIONS_QUERY,
  );

  return json({collections});
}

// @ts-ignore
const _Link = (props) => <NavBarLink {...props} as={Link} />;

export default function Index() {
  // lmao this is a mess
  const {
    collections: {nodes: collectionNodes},
  } = useLoaderData<typeof loader>();

  const links = configData.navbar.links.map((link) => ({
    label: link.label,
    href: link.link,
    ...(link.label === 'Menú' && {active: 'true'}),
  }));

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <MenuPage collections={collectionNodes as Array<Collection>} />
      <Footer />
    </>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query Collections {
    collections(first: 250) {
      nodes {
        handle
        title
        products(first: 250) {
          nodes {
            title
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              nodes {
                url(transform: {
                  maxWidth: 1080, 
                  crop: CENTER
                })
                altText
              }
            }
            collections(first: 250) {
              nodes {
                title
                handle
              }
            }
          }
        }
      }
    }
  }
`;
