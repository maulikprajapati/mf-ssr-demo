import { Application, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initMiddleware = async (express: any, app: Application, done: NextFunction) => {
  // static path where files such as images and js will be served from
  
  const renderThunk = (await import('./server-entry')).default;
  const serverRender = renderThunk();
  app.get('/', serverRender);
  app.use('/static', express.static('./dist/client'));
  app.use('/server', express.static('./dist/server'));

  done();
};
