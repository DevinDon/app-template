import { Server } from 'koa-backend-server';
import PATH from './router';

const server = new Server({
  address: {
    portocol: 'HTTP',
    port: 8080
  },
  database: {
    options: {
      'type': 'mysql',
      'host': 'app-database',
      'port': 3306,
      'username': 'app',
      'password': 'app',
      'database': 'app',
      'synchronize': true,
      'logging': true,
      'entities': [
        'src/entity/**/*.entity.ts'
      ],
      'migrations': [],
      'subscribers': []
    }
  },
  router: {
    paths: PATH,
    version: 'v1'
  },
  session: {
    name: 'session.id',
    redis: {
      host: 'app-redis',
      port: 6379
    }
  }
});

server.listen();
