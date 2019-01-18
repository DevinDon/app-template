FROM node
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm i --production
COPY [".", "."]
CMD ["node", "."]
