/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.scss';

const render = (App: any) => {
  const root: any = document.getElementById('root');
  ReactDOMClient.hydrateRoot(
    root,
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
};

render(App);
