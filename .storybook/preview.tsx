import React from 'react';

import {Preview} from '@storybook/react';
import {ThemeProvider} from '@emotion/react';

import {GlobalStyles} from '../app/global.styles';
import theme from '../app/theme';

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
