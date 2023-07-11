import {Link, useLoaderData} from '@remix-run/react';
import {
  Location,
  LocationConnection,
  Menu as NavigationMenu,
  Metafield,
} from '@shopify/hydrogen/storefront-api-types';
import {LoaderArgs} from '@shopify/remix-oxygen';

import {CustomLink} from '~/components/atoms/link';
import {Hero} from '~/components/organisms/hero';
import {NavBar} from '~/components/organisms/navbar';
import {PageHero} from '~/components/organisms/page-hero';
import {Footer} from '~/components/templates/footer';
import {Temple} from '~/components/templates/temple';
import {mapNavBarLinks} from '~/utils';

// @ts-ignore
const _Link = (props) => <CustomLink {...props} as={Link} />;

interface ShopifyLocation extends Location {
  schedule?: Pick<Metafield, 'value'>;
}

export async function loader({context: {storefront}}: LoaderArgs) {
  const {menu, locations, collection} = await storefront.query<{
    menu: NavigationMenu;
    locations: LocationConnection;
  }>(QUERY);

  const {nodes} = locations as LocationConnection;
  const location = nodes[0] as ShopifyLocation;

  return {
    menu: menu as NavigationMenu,
    location,
  };
}

export default function Visitanos() {
  const {
    menu: {items: menuItems},
    location,
  } = useLoaderData<typeof loader>();

  const links = mapNavBarLinks(menuItems, 'Inicio');

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <PageHero
        title="Visita nuestra barra perrona"
        subtitle={{
          value: 'Estamos más cerca de lo que crees, ¡ven a visitarnos!',
        }}
        linkRender={_Link}
      />
      <Temple
        address={location?.address}
        schedule={location?.schedule}
        linkRender={_Link}
        showRuler={false}
      />
      <Footer address={location?.address} schedule={location?.schedule} />
    </>
  );
}

const QUERY = `#graphql
  query FeaturedCollections {
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
  }
`;
