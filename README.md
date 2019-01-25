# APP Template

Web application with Angular & Koa.

# Description

TypeScript Template Porject, with client(Angular) end and server(Koa) end.

TypeScript 项目模板, 前端 Angular + 后端 Koa.

*Last update: 2018.1.26*

*最后更新: 2018.1.26*

# Script

**package.json**
```json
"scripts": {
  "build": "npm run build:client && npm run build:server",
  "build:client": "cd client && npm run build",
  "build:server": "cd server && npm run build",
  "clean": "node tool clean",
  "install": "npm run install:client && npm run install:server",
  "install:client": "cd client && npm i",
  "install:server": "cd server && npm i",
  "pack": "npm run build && npm run pack:only",
  "pack:only": "node tool pack"
}
```

*See [tool.js](https://github.com/DevinDon/app-template/blob/master/tool.js) for detail.*

## Build

*Build this application.*

> `npm run build:client && npm run build:server`

### Build client

> `npm run build:client`

### Build server

> `npm run build:server`

## Clean

> `npm run clean`

## Pack

*Build and pack this application.*

> `npm run pack`

### Pack only

*Pack this application only.*

> `npm run pack:only`

### Pack for other arch

*For example, the **ARM32V7(RaspberryPi)**.*

> `npm run pack arm32v7`

> `npm run pack:only arm32v7`

# Client

Build client with Angular.

使用 Angular 构建客户端.

# Server

The server uses KBS as the backend server by default.

服务器端默认使用基于 Koa2 封装的 [Koa Backend Server, KBS](https://www.npmjs.com/package/koa-backend-server) 作为后端服务器.

With database, redis(session) and router support.

提供数据库, 持久会话以及路由管理支持.

# Deploy

Deploy with docker, modify the configuration yourself.

使用 Docker 搭建环境, 自行修改配置.
