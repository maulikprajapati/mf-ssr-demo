import express from 'express';
import { initMiddleware } from './middleware';

const app = express();
const PORT = process.env.PORT || 3000;

const done = () => {
  app.listen(PORT, () => {
    console.info(`[${new Date().toISOString()}]`, `App is running: 🌎 http://localhost:${PORT}`);
  });
};

if ((module as any).hot) {
  // module.hot.dispose(console.log)
  (module as any).hot.accept('./index', () => {
    console.log('is hot reloading');
    require('./index');
  });
}

initMiddleware(express, app, done);

export default app;
