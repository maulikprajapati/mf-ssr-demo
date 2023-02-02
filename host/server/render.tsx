/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom/server';

import App from '../src/App';

export default async (req: any, res: any) => {
  const helmet = Helmet.renderStatic();
  let didError = false;

  const stream = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      onAllReady() {
        res.statusCode = didError ? 500 : 200;
        res.setHeader('Content-type', 'text/html');
        res.write('<!DOCTYPE html>');
        res.write(`<html ${helmet.htmlAttributes.toString()}><head>${helmet.title.toString() || 'host'}${helmet.meta.toString()}${helmet.link.toString()}</head><body>`);
        res.write('<div id="root">');
        stream.pipe(res);
        res.write('</div>');
        res.write(`<script async data-chunk="main" src="http://localhost:${process.env.PORT || '3000'}/static/main.js"></script>`);
        res.write('</body></html>');
      },
      onShellError(e: any) {
        console.error(e.message);
        res.statusCode = 500;
        res.send('<h1>An error occurred</h1>');
      },
      onError(err: any) {
        didError = true;
        console.error(err.message);
      },
    },
  );
};
