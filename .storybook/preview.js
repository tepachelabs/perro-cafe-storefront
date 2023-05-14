import {ThemeProvider as ScThemeProvider} from 'styled-components';
import theme from '../app/theme';
import {GlobalStyles} from '../app/global.styles';
import { ThemeProvider } from "@emotion/react";

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ScThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ScThemeProvider>
    </ThemeProvider>
  ),
];
