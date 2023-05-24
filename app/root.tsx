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
import Posthog from 'posthog-js';
import {useEffect} from 'react';

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
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Raleway:wght@400;700&display=swap',
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({context}: LoaderArgs) {
  const layout = await context.storefront.query<{shop: Shop}>(LAYOUT_QUERY);

  return {
    layout,
    ENV: {
      PUBLIC_POSTHOG_KEY: context.env.PUBLIC_POSTHOG_KEY,
      NODE_ENV: context.env.NODE_ENV,
    },
  };
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  useEffect(() => {
    if (data.ENV.PUBLIC_POSTHOG_KEY.length) {
      Posthog.init(data.ENV.PUBLIC_POSTHOG_KEY, {
        api_host: 'https://app.posthog.com',
        loaded: (posthog) => {
          // Enable debug mode in development
          if (data.ENV.NODE_ENV === 'development') {
            posthog.debug();
          }
        },
      });
    }
  });

  return (
    <ThemeProvider theme={theme}>
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
