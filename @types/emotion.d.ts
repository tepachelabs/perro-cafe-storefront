import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
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
      borderWidth: string;
      header: string;
      subHeader: string;
      numeralSubheader: string;
    };
    mediaQueries: {
      handheld: string;
      desktop: string;
    };
  }
}
