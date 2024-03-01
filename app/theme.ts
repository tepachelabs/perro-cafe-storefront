import {Theme} from '@emotion/react';

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

const unit = 4;
const maxWidth = '960px';

const resolutions = {
  extraSmall: '0',
  small: '768px',
};

const handheld = `@media (min-width: ${resolutions.extraSmall})`;
const desktop = `@media (min-width: ${resolutions.small})`;

const main: Theme = {
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
    body: '18px',
    borderWidth: `${unit}px`,
    maxWidth,
    header: `${unit * 16}px`,
    subHeader: `${unit * 12}px`,
    numeralSubheader: `${unit * 10}px`,
    heading1: `${unit * 12}px`,
    heading2: `${unit * 8}px`,
    heading3: `${unit * 6}px`,
    heading4: `${unit * 5}px`,
    heading5: `${unit * 4}px`,
    heading6: `${unit * 3}px`,
  },

  mediaQueries: {
    handheld,
    desktop,
  },
};

export default main;
