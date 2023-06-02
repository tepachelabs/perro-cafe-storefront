// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable check-file/filename-naming-convention */
import {Link, useLoaderData, useParams} from '@remix-run/react';
import type {Node, Page, Product} from '@shopify/hydrogen/storefront-api-types';
import {json, MetaFunction, type LoaderArgs} from '@shopify/remix-oxygen';

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
  seoDescription?: MetafieldValue;
}

interface LoaderProps {
  page: ShopifyPage;
  image?: HeroBanner;
  products?: Array<Product>;
}

export async function loader({
  params: {handle},
  context: {storefront},
}: LoaderArgs) {
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
      page,
      image: image?.node.image,
      products: products?.nodes,
    } as LoaderProps;
  }

  return {page} as LoaderProps;
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
      }
    }
  }
`;
