docker build -t your-app-nginx ./nginx
docker build -t your-app-server ./server
docker stack deploy -c docker-compose.yml your-app-name
