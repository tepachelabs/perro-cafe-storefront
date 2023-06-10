// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable check-file/filename-naming-convention */
import {Link, useLoaderData, useParams} from '@remix-run/react';
import type {
  Menu,
  Location,
  LocationConnection,
  Metafield,
  Node,
  Page,
  Product,
} from '@shopify/hydrogen/storefront-api-types';
import {MetaFunction, type LoaderArgs} from '@shopify/remix-oxygen';

import {CustomLink} from '~/components/atoms/link';
import {NavBar} from '~/components/organisms/navbar';
import {
  HeroBanner,
  MetafieldValue,
  PageHero,
} from '~/components/organisms/page-hero';
import {Footer} from '~/components/templates/footer';
import {PageInfo} from '~/components/templates/page-info';
import configData from '~/config.json';
import {mapNavBarLinks} from '~/utils';

interface ShopifyLocation extends Location {
  schedule?: Pick<Metafield, 'value'>;
}

interface ShopifyPage extends Page {
  productsTitle?: MetafieldValue;
  products?: MetafieldValue;
  image?: MetafieldValue;
  subtitle?: MetafieldValue;
  seoDescription?: MetafieldValue;
}

interface LoaderProps {
  menu: Menu;
  page: ShopifyPage;
  location?: ShopifyLocation;
  image?: HeroBanner;
  products?: Array<Product>;
}

export async function loader({
  params: {handle},
  context: {storefront},
}: LoaderArgs) {
  const {menu, locations, page} = await storefront.query<{
    menu: Menu;
    locations: ShopifyLocation;
    page: ShopifyPage;
  }>(PAGE_QUERY, {
    variables: {
      handle: handle!,
    },
  });

  if (!page) {
    throw new Response(null, {
      status: 404,
      statusText: 'El recurso solicitado no fue encontrado.',
    });
  }

  const {nodes: locationNodes} = locations as LocationConnection;

  if (page.image || page.products) {
    const requests = [];

    if (page.image) {
      requests.push(
        storefront.query<{node: Node}>(IMAGE_QUERY, {
          variables: {
            id: page.image.value,
          },
        }),
      );
    }

    if (page.products) {
      const ids = JSON.parse(page.products.value);

      requests.push(
        storefront.query<Node>(PRODUCTS_QUERY, {
          variables: {ids},
        }),
      );
    }

    const fulfill = await Promise.all(requests);

    let image;
    let products;

    if (page.image) {
      image = fulfill[0];

      if (page.products) {
        products = fulfill[1];
      }
    } else {
      products = fulfill[0];
    }

    return {
      menu,
      location: locationNodes[0],
      page,
      image: image?.node.image,
      products: products?.nodes,
    } as LoaderProps;
  }

  return {menu, location: locationNodes[0], page} as LoaderProps;
}

// @ts-ignore
const _Link = (props) => <CustomLink {...props} as={Link} />;

export function CatchBoundary() {
  const links = configData.navbar.links.map((link) => ({
    label: link.label,
    href: link.link,
  }));

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <PageHero linkRender={_Link} />
      <Footer />
    </>
  );
}

export const meta: MetaFunction<typeof loader> = ({data, params}) => {
  if (!data || !data.page) {
    return {};
  }

  const pageSeo = data.page.seo!;
  const title = pageSeo?.title || `${data.page.title} - Culto al Perro Café`;
  const url = `https://perro.cafe/${params.handle}`;
  const description = pageSeo.description || null;
  const image = data.image ? data.image.url : null;

  return {
    title,
    description,
    url,
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:image': image,
    'twitter:title': title,
    'twitter:url': url,
    'twitter:description': description,
  };
};

export default function InfoPage() {
  const {handle} = useParams();
  const {
    menu: {items: menuItems},
    location,
    page,
    image,
    products,
  } = useLoaderData<typeof loader>();

  const links = mapNavBarLinks(menuItems, handle!);

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        imgSrc={image}
        linkRender={_Link}
      />
      <PageInfo
        content={page.body}
        productsTitle={page.productsTitle}
        products={products}
        linkRender={_Link}
      />
      <Footer address={location?.address} schedule={location?.schedule} />
    </>
  );
}

const PAGE_QUERY = `#graphql
  query Page($handle: String!) {
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
    page(handle: $handle) {
      body
      id
      handle
      title
      productsTitle: metafield(namespace: "custom", key: "products_title") {
        value
      }
      products: metafield(namespace: "custom", key: "recommended_products") {
        value
      }
      image: metafield(namespace: "custom", key: "header_image") {
        value
      }
      subtitle: metafield(namespace: "custom", key: "subtitle") {
        value
      }
      seoDescription: metafield(namespace: "custom", key: "seo_description") {
        value
      }
      seo {
        description
        title
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

const PRODUCTS_QUERY = `#graphql
  query Product($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        id
        title
        featuredImage {
          url(transform: {
            maxWidth: 300
            crop: CENTER
          })
          altText
        }
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        onlineStoreUrl
      }
    }
  }
`;
