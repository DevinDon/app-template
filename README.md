# APP Template

Web Application Template, with Angular client end and Rester server end.

Web 应用项目模板, 前端 [Angular](https://angular.io) + 后端 [Rester](https://github.com/DevinDon/rester).

# Demo

See [Angular 8 + Rester](https://demo.don.red/app-template) online demo.

<del>See [Angular 6 + Koa](https://devindon.github.io/app-template) online demo.</del>

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

```shell
npm run pack
```

## Deploy

```shell
cd dist && sh start.sh
```

Deploy with docker, modify the configuration yourself.

使用 Docker 搭建环境, 默认配置即可适用于大部分场景.

# [THE MIT LICENSE](https://raw.githubusercontent.com/DevinDon/license/master/THE%20MIT%20LICENSE)

Copyright © 2018+ Devin Don

LICENSE: MIT

Click https://raw.githubusercontent.com/DevinDon/license/master/THE%20MIT%20LICENSE to view a copy of this license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
