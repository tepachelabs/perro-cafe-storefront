import {Global, css} from '@emotion/react';

import theme from './theme';

export const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      * {
        margin: 0;
      }

      body {
        background-color: ${theme.colors.background};
      }
    `}
  />
);
