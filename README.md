# APP Template

Web application with Angular & Koa.

# Description

TypeScript Template Porject, with client(Angular) end and server(Koa) end.

TypeScript 项目模板, 前端 Angular + 后端 Koa.

*Last update: 2018.1.20*

*最后更新: 2018.1.20*

# Script

*See [gulpfile.js](https://github.com/DevinDon/app-template/blob/master/gulpfile.js) for detail.*

```json
"scripts": {
  "build": "cd client && npm run build && cd ../server && npm run build",
  "clean": "gulp clean",
  "install": "cd client && npm i && cd ../server && npm i",
  "pack": "npm run build && gulp pack",
  "pack:only": "gulp pack"
}
```

## Build the app

> `npm run build`

## Clean all dist folder

> `npm run clean`

## Build & pack the app

> `npm run pack`

## Pack the app only

> `npm run pack:only`

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
