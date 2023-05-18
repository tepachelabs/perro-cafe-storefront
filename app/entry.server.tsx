import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import {RemixServer} from '@remix-run/react';
import type {EntryContext} from '@shopify/remix-oxygen';
import {renderToString} from 'react-dom/server';

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
  let markup = renderToString(
    <CacheProvider value={cache}>
      <RemixServer context={remixContext} url={request.url} />
    </CacheProvider>,
  );

  const chunks = extractCriticalToChunks(markup);
  const styles = constructStyleTagsFromChunks(chunks);

  markup = markup.replace('__STYLES__', styles);

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
