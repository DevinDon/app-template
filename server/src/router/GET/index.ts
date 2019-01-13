import { Middleware } from 'koa';
import { RouterPaths } from 'koa-backend-server';
import { Response } from '../../type';

/** This type is only use in this file, do not export it. */
type RES = Response<{
  ip: string;
  query: any;
}>;

/**
 * The root path of GET method, this is a example.
 * @path /index
 * @param {ParameterizedContext<any, {}>} c Context.
 * @param {Promise<any>} next Call after all done.
 */
const index: Middleware = async (c, next) => {
  /** GET params. */
  const request = c.request.query;
  /** Client ip, or remote ip. */
  const ip = c.request.ip;
  // Set response.
  (c.body as RES) = {
    id: Date.now(),
    status: true,
    content: {
      ip,
      query: request
    }
  };
  // To next middleware.
  await next();
};

export const GET: RouterPaths = {
  'index': {
    path: '/',
    ware: index,
    cors: undefined, // It is no need to set with GET method.
    withoutPrefix: false
  }
};

export default GET;
