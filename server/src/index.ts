import { Server } from 'koa-backend-server';
import PATH from './router';

const server = new Server({
  router: {
    paths: PATH,
    version: 'v1'
  }
});

server.listen();
