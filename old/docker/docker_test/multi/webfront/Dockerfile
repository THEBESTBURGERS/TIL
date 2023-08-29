FROM node:14-alpine AS build 


RUN mkdir -p /app
WORKDIR /app

COPY . /app
RUN npm i
RUN npm run build

FROM nginx

COPY --from=build /app/dist/webfront /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default/conf