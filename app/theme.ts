/**
 * DA THEME
 */
const orange = '#f1774c';
const yellow = '#f3b760';
const green = '#35ae9f';
const linen = '#f8eee0';
const wheat = '#f2dab2';
const black = '#222222';
const gray = '#bdbdbd';
const spanishGray = '#a39b98';

const oswald = '"Oswald", sans-serif';
const raleway = '"Raleway", sans-serif';

const maxWidth = '960px';

export interface MainTheme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    backgroundDarker: string;
    black: string;
    gray: string;
    grayDarker: string;
  };
  fonts: {
    body: string;
    title: string;
  };
  sizes: {
    maxWidth: string;
  };
}

const main: MainTheme = {
  colors: {
    primary: orange,
    secondary: green,
    tertiary: yellow,
    background: linen,
    backgroundDarker: wheat,
    black,
    gray,
    grayDarker: spanishGray,
  },

  fonts: {
    body: raleway,
    title: oswald,
  },

  sizes: {
    maxWidth,
  },
};

export default main;
