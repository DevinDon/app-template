import { Server, ServerConfig } from '@iinfinity/rester';
import PATH from './router';
import { statistic } from './ware';

/** Production config. */
const prodConfig: ServerConfig = {
  address: {
    portocol: 'HTTP',
    host: '0.0.0.0',
    port: 8080,
    proxy: true, // In proxy mode or not
    ssl: {
      cert: 'CERT CONTENT',
      key: 'KEY CONTENT'
    }
  },
  database: {
    type: 'postgres',
    host: 'app-postgres',
    port: 5432,
    username: 'app',
    password: 'app',
    database: 'app',
    synchronize: true,
    logging: true,
    entities: [
      'entity/**/*.entity.js'
    ],
    migrations: [],
    subscribers: []
  },
  router: {
    static: { // Backend static html page
      path: 'client'
    },
    paths: PATH
  },
  session: {
    domain: '',
    name: 'session.id',
    redis: {
      host: 'app-redis',
      port: 6379
    }
  }
};

/** Devlopment config. */
const devConfig: ServerConfig = {
  address: {
    portocol: 'HTTP',
    host: '0.0.0.0',
    port: 8080,
    proxy: true, // In proxy mode or not
    ssl: {
      cert: 'CERT CONTENT',
      key: 'KEY CONTENT'
    }
  },
  database: {
    type: 'postgres',
    host: 'app-postgres',
    port: 5432,
    username: 'app',
    password: 'app',
    database: 'app',
    synchronize: true,
    logging: true,
    entities: [
      'src/main/entity/**/*.entity.ts'
    ],
    migrations: [],
    subscribers: []
  },
  router: {
    static: { // Backend static html page
      path: 'client'
    },
    paths: PATH
  },
  session: {
    domain: '',
    name: 'session.id',
    redis: {
      host: 'app-redis',
      port: 6379
    }
  }
};

const server = new Server(devConfig);
// Use example statistic middleware
server.use({ statistic });

server.listen();
