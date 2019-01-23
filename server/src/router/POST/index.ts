import { Middleware } from 'koa';
import { CORS_ALLOW_ALL, RouterPaths } from 'koa-backend-server';
import { Response } from '../../@types';
import { generateResponse } from '../config';

interface Content {
  name: string;
  email: string;
}

type RES = Response<any>;

const index: Middleware = async (c, next) => {
  /** POST request data, do not trust client. */
  const content: Content = {
    name: c.request.body.name || '',
    email: c.request.body.email || ''
  };
  c.body = generateResponse<Content>(content);
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
