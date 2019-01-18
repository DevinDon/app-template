FROM node
RUN npm config set registry https://registry.npm.taobao.org
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm i --production
COPY [".", "."]
CMD ["node", "."]
