import {Link, useLoaderData} from '@remix-run/react';
import {Image, Page} from '@shopify/hydrogen/storefront-api-types';
import {LoaderArgs, json} from '@shopify/remix-oxygen';

import {NavBar, NavBarLink} from '~/components/organisms/navbar';
import {RegularsHero} from '~/components/organisms/regulars-hero';
import {Footer} from '~/components/templates/footer';
import {RegularsInfo} from '~/components/templates/regulars-info';
import configData from '~/config.json';

export async function loader({context: {storefront}}: LoaderArgs) {
  const {page} = await storefront.query<Page>(PAGE_QUERY);
  const {
    node: {image},
  } = await storefront.query<Node>(IMAGE_QUERY, {
    variables: {
      id: page.image.value,
    },
  });

  return json({page, image});
}

// @ts-ignore
const _Link = (props) => <NavBarLink {...props} as={Link} />;

export default function Frecuentes() {
  const {page, image} = useLoaderData<typeof loader>();

  const links = configData.navbar.links.map((link) => ({
    label: link.label,
    href: link.link,
    ...(link.label === 'Frecuentes' && {active: 'true'}),
  }));

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <RegularsHero
        title={page.title}
        subtitle={page.subtitle}
        imgSrc={(image as Image).url}
      />
      <RegularsInfo content={page.body} />
      <Footer />
    </>
  );
}

const PAGE_QUERY = `#graphql
  query Pages {
    page(handle: "frecuentes") {
      title
      body
      image: metafield(namespace: "custom", key: "header_image") {
        value
      }
      subtitle: metafield(namespace: "custom", key: "subtitle") {
        value
      }
    }
  }
`;

const IMAGE_QUERY = `#graphql
  query Image($id: ID!) {
    node(id: $id) {
      ... on MediaImage {
        image {
          url
        }
      }
    }
  }
`;
