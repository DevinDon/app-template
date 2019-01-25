import { Server } from 'koa-backend-server';
import PATH from './router';
import { statistic } from './ware';

const server = new Server({
  router: {
    paths: PATH
  }
});
// // Use example statistic middleware
// server.use(statistic);

server.listen();
