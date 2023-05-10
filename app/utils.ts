import {MainTheme} from '~/theme';

export const select =
  (fn: (_: MainTheme) => string) => (props: {theme: MainTheme}) =>
    fn(props.theme);

export const currencyFormatter = Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
});
