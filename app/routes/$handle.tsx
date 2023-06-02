// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable check-file/filename-naming-convention */
import {Link, useLoaderData, useParams} from '@remix-run/react';
import type {Node, Page, Product} from '@shopify/hydrogen/storefront-api-types';
import {json, type LoaderArgs} from '@shopify/remix-oxygen';

import {NavBar, NavBarLink} from '~/components/organisms/navbar';
import {
  HeroBanner,
  MetafieldValue,
  RegularsHero,
} from '~/components/organisms/regulars-hero';
import {Footer} from '~/components/templates/footer';
import {RegularsInfo} from '~/components/templates/regulars-info';
import configData from '~/config.json';

interface ShopifyPage extends Page {
  productsTitle?: MetafieldValue;
  products?: MetafieldValue;
  image?: MetafieldValue;
  subtitle?: MetafieldValue;
}

export const meta = () => {
  return {
    title: 'Culto al Perro Café',
    description: 'A custom storefront powered by Hydrogen',
  };
};

export async function loader({params, context: {storefront}}: LoaderArgs) {
  const result: {
    page?: ShopifyPage;
    image?: HeroBanner;
    products?: Array<Product>;
  } = {};

  const handle = params.handle;
  const {page} = await storefront.query<{page: ShopifyPage}>(PAGE_QUERY, {
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

  result.page = page as ShopifyPage;
  if (result.page.image) {
    const {
      node: {image},
    } = await storefront.query<{node: Node}>(IMAGE_QUERY, {
      variables: {
        id: page.image.value,
      },
    });

    result.image = image as HeroBanner;
  }

  if (page && page.products) {
    const productIds = JSON.parse(page.products.value);
    const {nodes: products} = await storefront.query<Node>(PRODUCTS_QUERY, {
      variables: {
        ids: productIds,
      },
    });

    result.products = products as Array<Product>;
  }

  return json({
    page: result.page,
    image: result.image,
    products: result.products,
  });
}

// @ts-ignore
const _Link = (props) => <NavBarLink {...props} as={Link} />;

export function CatchBoundary() {
  const links = configData.navbar.links.map((link) => ({
    label: link.label,
    href: link.link,
  }));

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <RegularsHero />
      <Footer />
    </>
  );
}

export default function InfoPage() {
  const {handle} = useParams();
  const {page, image, products} = useLoaderData<typeof loader>();

  const links = configData.navbar.links.map((link) => ({
    label: link.label,
    href: link.link,
    ...(link.label.match(new RegExp(handle!, 'gi')) && {active: 'true'}),
  }));

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <RegularsHero
        title={page.title}
        subtitle={page.subtitle}
        imgSrc={image}
      />
      <RegularsInfo
        content={page.body}
        productsTitle={page.productsTitle}
        products={products}
      />
      <Footer />
    </>
  );
}

const PAGE_QUERY = `#graphql
  query Page($handle: String!) {
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
