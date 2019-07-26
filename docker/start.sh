docker build -t app-template-server server
docker stack deploy -c docker-compose.yml app-template
