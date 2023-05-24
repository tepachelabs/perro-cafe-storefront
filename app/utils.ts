import {Theme} from '@emotion/react';

export const select = (fn: (_: Theme) => string) => (props: {theme: Theme}) =>
  fn(props.theme);
