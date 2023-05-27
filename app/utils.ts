import {Theme} from '@emotion/react';

export const select =
  (fn: (_: Theme) => string | number) => (props: {theme: Theme}) =>
    fn(props.theme);
