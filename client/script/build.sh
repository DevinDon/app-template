#!/bin/bash
npm run build
cd dist
pwd
tee > ./Dockerfile <<-'EOF'
FROM iinfinity/nginx
COPY ["./client/*", "/app/"]
RUN ls /app
RUN pwd
EOF
docker build -t registry.don.red/$npm_package_name .
docker push registry.don.red/$npm_package_name
