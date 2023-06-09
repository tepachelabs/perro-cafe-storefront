import {Link, useLoaderData} from '@remix-run/react';
import type {
  Menu,
  MenuItem,
  Location,
  LocationConnection,
  Metafield,
  Node,
} from '@shopify/hydrogen/storefront-api-types';
import {type LoaderArgs} from '@shopify/remix-oxygen';

import {CustomLink} from '~/components/atoms/link';
import {NavBar} from '~/components/organisms/navbar';
import {Footer} from '~/components/templates/footer';
import {MenuPage} from '~/components/templates/menu-page';
import configData from '~/config.json';
import {mapNavBarLinks} from '~/utils';

interface ShopifyLocation extends Location {
  schedule?: Pick<Metafield, 'value'>;
}

export const meta = () => {
  const title = 'Menú - Culto al Perro Café';
  const description =
    'Descubre nuestro toque casero, con ingredientes de la más alta calidad, seleccionados cuidadosamente para ti.';
  const url = 'https://perro.cafe/menu';

  return {
    title,
    'og:title': title,
    description,
    url,
    'og:url': url,
    'twitter:url': url,
  };
};

export async function loader({context: {storefront}}: LoaderArgs) {
  const {menu, locations, nodes} = await storefront.query<{
    menu: Menu;
    locations: LocationConnection;
    nodes: Node;
  }>(COLLECTIONS_QUERY, {
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

  const {nodes: locationNodes} = locations as LocationConnection;
  const location = locationNodes[0];

  return {menu, collections, location: location as ShopifyLocation};
}

// @ts-ignore
const _Link = (props) => <CustomLink {...props} as={Link} />;

export default function Menu() {
  const {
    menu: {items: menuItems},
    collections,
    location,
  } = useLoaderData<typeof loader>();

  const links = mapNavBarLinks(menuItems, 'Menú');

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <MenuPage collections={collections} />
      <Footer address={location?.address} schedule={location?.schedule} />
    </>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query Menu($ids: [ID!]!) {
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
