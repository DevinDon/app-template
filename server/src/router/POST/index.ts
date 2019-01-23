import { Middleware } from 'koa';
import { CORS_ALLOW_ALL, RouterPaths } from 'koa-backend-server';
import { Statistic } from '../../entity';
import { generateResponse } from '../function';

type Content = Partial<Statistic>;

const index: Middleware = async (c, next) => {
  next();
  /** POST request data, do not trust client. */
  const content: Content = {
    who: c.request.ip,
    when: new Date().toISOString(),
    where: c.request.path,
    how: c.request.method.toUpperCase()
  };
  c.body = generateResponse<Content>({ content });
};

/** All POST router. */
export const POST: RouterPaths = {
  'index path for example': {
    path: '/',
    ware: index,
    cors: CORS_ALLOW_ALL,
    withoutPrefix: false // default to false, if true this path will be set without prefix
  }
};

export default POST;
