import {Link, useLoaderData} from '@remix-run/react';
import type {Node} from '@shopify/hydrogen/storefront-api-types';
import {json, type LoaderArgs} from '@shopify/remix-oxygen';

import {NavBar, NavBarLink} from '~/components/organisms/navbar';
import {Footer} from '~/components/templates/footer';
import {
  MenuCollection,
  MenuPage,
  MenuProduct,
} from '~/components/templates/menu-page';
import configData from '~/config.json';

export const meta = () => {
  return {
    title: 'Culto al Perro Café',
    description: 'A custom storefront powered by Hydrogen',
  };
};

export async function loader({context: {storefront}}: LoaderArgs) {
  const {nodes} = await storefront.query<{nodes: Node}>(COLLECTIONS_QUERY, {
    variables: {
      ids: [
        'gid://shopify/Collection/433512874277',
        'gid://shopify/Collection/433789960485',
        'gid://shopify/Collection/434472354085',
      ],
    },
  });

  const collections = nodes.map((node: any) => ({
    id: node.id,
    title: node.title,
    products: node.products.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      priceRange: edge.node.priceRange,
    })),
  }));

  return json({collections});
}

// @ts-ignore
const _Link = (props) => <NavBarLink {...props} as={Link} />;

export default function Index() {
  const {collections} = useLoaderData<typeof loader>();

  const links = configData.navbar.links.map((link) => ({
    label: link.label,
    href: link.link,
    ...(link.label === 'Menú' && {active: 'true'}),
  }));

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <MenuPage collections={collections} />
      <Footer />
    </>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query Menu($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Collection {
        id
        title
        products(first: 50) {
          edges {
            node {
              id
              title
              priceRange {
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
`;
