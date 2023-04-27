import {MainTheme} from '~/theme';

export const select =
  (fn: (_: MainTheme) => string) => (props: {theme: MainTheme}) =>
    fn(props.theme);
