import {RemixServer} from '@remix-run/react';
import type {EntryContext} from '@shopify/remix-oxygen';
import {renderToString} from 'react-dom/server';
import {ServerStyleSheet} from 'styled-components';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const sheet = new ServerStyleSheet();

  let markup = renderToString(
    sheet.collectStyles(
      <RemixServer context={remixContext} url={request.url} />,
    ),
  );
  markup = markup.replace('__STYLES__', sheet.getStyleTags());

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
