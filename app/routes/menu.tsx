import {Link, useLoaderData} from '@remix-run/react';
import type {
  Location,
  LocationConnection,
  Metafield,
  Node,
} from '@shopify/hydrogen/storefront-api-types';
import {json, type LoaderArgs} from '@shopify/remix-oxygen';

import {NavBar, NavBarLink} from '~/components/organisms/navbar';
import {Footer} from '~/components/templates/footer';
import {MenuPage} from '~/components/templates/menu-page';
import configData from '~/config.json';

interface ShopifyLocation extends Location {
  schedule: Pick<Metafield, 'value'>;
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
  const {locations} = await storefront.query<{locations: LocationConnection}>(
    LOCATIONS_QUERY,
  );

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

  const {nodes: locationNodes} = locations as LocationConnection;
  const location = locationNodes[0] as ShopifyLocation;

  return json({collections, location});
}

// @ts-ignore
const _Link = (props) => <NavBarLink {...props} as={Link} />;

export default function Index() {
  const {collections, location} = useLoaderData<typeof loader>();

  const links = configData.navbar.links.map((link) => ({
    label: link.label,
    href: link.link,
    ...(link.label === 'Menú' && {active: 'true'}),
  }));

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <MenuPage collections={collections} />
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
