import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import {RemixServer} from '@remix-run/react';
import type {EntryContext} from '@shopify/remix-oxygen';
import {renderToString} from 'react-dom/server';
import {ServerStyleSheet} from 'styled-components';

const key = 'css';
const cache = createCache({key});
const {extractCriticalToChunks, constructStyleTagsFromChunks} =
  createEmotionServer(cache);

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const sheet = new ServerStyleSheet();

  let markup = renderToString(
    <CacheProvider value={cache}>
      {sheet.collectStyles(
        <RemixServer context={remixContext} url={request.url} />,
      )}
    </CacheProvider>,
  );

  const chunks = extractCriticalToChunks(markup);
  const oldStyles = sheet.getStyleTags();
  const styles = constructStyleTagsFromChunks(chunks) + oldStyles;

  markup = markup.replace('__STYLES__', styles);

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
