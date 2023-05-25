// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable check-file/filename-naming-convention */
import {Link, useLoaderData, useParams} from '@remix-run/react';
import type {
  Image,
  Node,
  Page,
  Product,
} from '@shopify/hydrogen/storefront-api-types';
import {json, type LoaderArgs} from '@shopify/remix-oxygen';

import {NavBar, NavBarLink} from '~/components/organisms/navbar';
import {RegularsHero} from '~/components/organisms/regulars-hero';
import {Footer} from '~/components/templates/footer';
import {RegularsInfo} from '~/components/templates/regulars-info';
import configData from '~/config.json';

export const meta = () => {
  return {
    title: 'Culto al Perro Café',
    description: 'A custom storefront powered by Hydrogen',
  };
};

export async function loader({params, context: {storefront}}: LoaderArgs) {
  const result = {
    page: null,
    subtitle: null,
    image: null,
    products: null,
  };
  const handle = params.handle;
  const {page} = await storefront.query<Page>(PAGE_QUERY, {
    variables: {
      handle: handle!,
    },
  });
  result.page = page;

  if (page && page.image) {
    const {
      node: {image},
    } = await storefront.query<Node>(IMAGE_QUERY, {
      variables: {
        id: page.image.value,
      },
    });

    result.image = image;
  }

  if (page && page.products) {
    const productIds = JSON.parse(page.products.value);
    const {nodes: products} = await storefront.query<Node>(PRODUCTS_QUERY, {
      variables: {
        ids: productIds,
      },
    });

    result.products = products;
  }

  return json({
    page: result.page as any,
    image: result.image as any,
    products: result.products as any,
  });
}

// @ts-ignore
const _Link = (props) => <NavBarLink {...props} as={Link} />;

export default function Index() {
  const {handle} = useParams();
  const {page, image, products} = useLoaderData<typeof loader>();
  console.log('In slug', page);
  console.log('Products', products);

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
        imgSrc={image as Image}
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
      }
    }
  }
`;
