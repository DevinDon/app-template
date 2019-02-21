FROM nginx
WORKDIR /app
RUN rm -rf /etc/nginx
COPY ["./config", "/etc/nginx"]
COPY ["./client", "."]
CMD nginx -g 'daemon off;'
