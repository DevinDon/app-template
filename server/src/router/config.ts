import { CORS } from 'koa-backend-server';

/** CORS config. */
export const allowAllCORS: CORS = {
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': ['POST', 'OPTIONS', 'GET'],
  'Access-Control-Allow-Origin': '*'
};
