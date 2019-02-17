# APP Template

Web application with Angular & Koa.

# Feature

- Docker compose support, just one command to deploy.
- Multi-platform support, such as Raspberry Pi(ARM32v7) and x86/64.
- Database(MySQL, POSTGRESQL and so on) support, via TypeORM.
- Session support, with redis storage.
- PWA support, via Angular PWA.
- Angular Material support, and the custome theme template.

# Description

TypeScript Template Porject, with client(Angular) end and server(Koa) end.

TypeScript 项目模板, 前端 Angular + 后端 Koa.

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
  "pack:only": "node tool pack",
  "update": "npm up --dev && npm run update:client && npm run update:server",
  "update:client": "cd client && npm run update",
  "update:server": "cd server && npm run update"
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

## Update package version

*Update all package.*

> `npm run update`

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
