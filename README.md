# APP Template

# Description

TypeScript Template Porject, with client(web) end and server end.

TypeScript 项目模板, 前端 + 后端.

*Last update: 2018.1.13*

*最后更新: 2018.1.13*

# Script

*See [gulpfile.js](https://github.com/DevinDon/app-template/blob/master/gulpfile.js) for detail.*

    "build": "gulp build",
    "clean": "gulp clean",
    "pack": "gulp build && gulp pack",
    "pack:only": "gulp pack",
    "start": "gulp",
    "watch": "gulp watch"

## Build the app

> `npm run build` or `npm start`

## Clean all dist folder

> `npm run clean`

## Build & pack the app

> `npm run pack`

## Pack the app only

> `npm run pack:only`

## Monitor source code and compile automatically

> `npm run watch`

# Client

The client uses CommonJS module and TypeScript by default, packaged via gulp and browserify.

客户端默认使用 CommonJS 模块, 以 TypeScript 为默认语言, 使用 gulp 和 browserify 打包.

Or Angular, my favourite.

或者使用 Angular, 我的最爱.

# Server

The server uses KBS as the backend server by default.

服务器端默认使用基于 Koa2 封装的 [Koa Backend Server, KBS](https://www.npmjs.com/package/koa-backend-server) 作为后端服务器.

# Deploy

Deploy with docker, modify the configuration yourself.

使用 Docker 搭建环境, 自行修改配置.
