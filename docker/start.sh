docker build -t app-template-server:latest server
docker stack deploy -c docker-compose.yml app-template
