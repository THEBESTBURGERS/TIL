FROM ubuntu:latest

RUN apt-get update && apt-get install -y nginx

COPY index.html /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]
