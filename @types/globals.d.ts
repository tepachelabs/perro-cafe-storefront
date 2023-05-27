import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from 'react';
import {PartialObjectDeep} from 'type-fest/source/partial-deep';
import {Image} from '@shopify/hydrogen-react/dist/types/storefront-api-types';
import {
  Location,
  Metafield,
  Page,
} from '@shopify/hydrogen/storefront-api-types';

type Product = {
  id: Key | null | undefined;
  variants: {
    nodes: {image: PartialObjectDeep<Image, {recurseIntoArrays: true}>}[];
  };
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
};

export {};

declare global {
  type MetafieldValue = Pick<Metafield, 'value'>;

  interface ShopifyLocation extends Location {
    schedule: MetafieldValue;
  }

  interface ShopifyPage extends Page {
    productsTitle?: MetafieldValue;
    products?: MetafieldValue;
    image?: MetafieldValue;
    subtitle?: MetafieldValue;
  }
}
