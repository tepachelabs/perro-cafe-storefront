import {Theme} from '@emotion/react';

export const select = (fn: (_: Theme) => string) => (props: {theme: Theme}) =>
  fn(props.theme);

export const currencyFormatter = Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
});
