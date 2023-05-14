import {ThemeProvider} from '@emotion/react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import type {Shop} from '@shopify/hydrogen/storefront-api-types';
import {
  type LinksFunction,
  type MetaFunction,
  type LoaderArgs,
} from '@shopify/remix-oxygen';
import {ThemeProvider as ScThemeProvider} from 'styled-components';

import {GlobalStyles} from '~/global.styles';
import theme from '~/theme';

import favicon from '../public/favicon.svg';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({context}: LoaderArgs) {
  const layout = await context.storefront.query<{shop: Shop}>(LAYOUT_QUERY);
  return {layout};
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  // eslint-disable-next-line no-console
  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <ScThemeProvider theme={theme}>
        <html lang="es">
          <head>
            <Meta />
            <Links />
            {typeof document === 'undefined' ? '__STYLES__' : null}
          </head>
          <body>
            <GlobalStyles />
            <Outlet />
            <ScrollRestoration />
            <Scripts />
          </body>
        </html>
      </ScThemeProvider>
    </ThemeProvider>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;
