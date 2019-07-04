# APP Template

Web Application Template, with Angular client end and Rester server end.

Web 应用项目模板, 前端 [Angular](https://angular.io) + 后端 [Rester](https://github.com/DevinDon/rester).

# Demo

See [Angular 8 + Rester](https://demo.don.red/app-template) online demo.

See [Angular 6 + Koa](https://devindon.github.io/app-template) online demo.

# Feature

- Docker compose support, just one command to deploy.
- Multi-platform support, such as Raspberry Pi(ARM32v7) and x86/64.
- Database(MySQL, POSTGRESQL, SQLite and so on) support, via [TypeORM](https://typeorm.io).
- PWA support, via Angular PWA.
- Angular Material support, and the custome coless theme template.

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

*See [tool.js](https://github.com/DevinDon/app-template/blob/master/tool.js) for more detail.*

## Build & Pack

> npm run pack

## Deploy

> cd dist && sh start.sh

Deploy with docker, modify the configuration yourself.

使用 Docker 搭建环境, 默认配置即可适用于大部分场景.
