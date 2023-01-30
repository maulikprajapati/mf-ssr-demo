import { Request, Response } from 'express';

export default () => async (req: Request, res: Response) => {
  const renderer = (await import('./render')).default;
  return renderer(req, res);
};
