docker build -t application-server server
docker stack deploy -c docker-compose.yml application
