FROM node
WORKDIR /app
COPY ["package.json", "./"]
RUN npm i --production
COPY [".", "."]
CMD ["node", "server"]
