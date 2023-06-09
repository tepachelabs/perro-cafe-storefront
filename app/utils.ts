import {Theme} from '@emotion/react';
import {MenuItem} from '@shopify/hydrogen/storefront-api-types';

const hostname = 'perro.cafe';

export const select =
  (fn: (_: Theme) => string | number) => (props: {theme: Theme}) =>
    fn(props.theme);

export const mapNavBarLinks = (
  menuItems: Array<MenuItem>,
  pageHandle: string,
) =>
  menuItems.map((link) => {
    const uri = new URL(link.url!);
    const href = uri.hostname === hostname ? uri.pathname : link.url!;

    return {
      label: link.title,
      href,
      ...(link.title.match(new RegExp(pageHandle, 'gi')) && {active: 'true'}),
    };
  });
