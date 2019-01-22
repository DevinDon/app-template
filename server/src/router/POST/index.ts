import { Middleware } from 'koa';
import { CORS_ALLOW_ALL, RouterPaths } from 'koa-backend-server';
import { Response } from '../../@types';

interface REQ {
  name: string;
  email: string;
}

type RES = Response<any>;

const index: Middleware = async (c, next) => {
  /** POST request data, do not trust client. */
  const request: REQ = {
    name: c.request.body.name || '',
    email: c.request.body.email || ''
  };
  (c.body as RES) = {
    id: Date.now(),
    status: Boolean(request.name && request.email),
    content: request
  };
  await next();
};

/** All POST router. */
export const POST: RouterPaths = {
  'index': {
    path: '/',
    ware: index,
    cors: CORS_ALLOW_ALL,
    withoutPrefix: false // default to false
  }
};

export default POST;
