FROM iinfinity/node
ENV MODE=PROD
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm i --production
COPY [".", "."]
ENTRYPOINT [ "node", "." ]
