import { Middleware } from 'koa';
import { CORS_ALLOW_ALL, RouterPaths } from '@iinfinity/rester';
import { Statistic } from '../../entity';
import { generateResponse } from '../function';

/** This type is only use in this file, do not export it. */
type Content = Partial<Statistic>;

/**
 * The root path of GET method, this is a example.
 * @path /index
 * @param {ParameterizedContext<any, {}>} c Context.
 * @param {Promise<any>} next Call after all done.
 */
const index: Middleware = async (c, next) => {
  next();
  const content: Content = {
    who: c.request.ip,
    when: new Date().toISOString(),
    where: c.request.path,
    how: c.request.method.toUpperCase()
  };
  c.body = generateResponse<Content>({ content });
};

/** All GET router. */
export const GET: RouterPaths = {
  'index path for example': {
    path: '/',
    ware: index,
    cors: CORS_ALLOW_ALL,
    withoutPrefix: false // default to false, if true this path will be set without prefix
  }
};

export default GET;
