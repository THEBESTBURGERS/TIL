FROM node:14.15-alpine as node

RUN mkdir -p /app
WORKDIR /app

# 개발한 파일들을 app으로 옮기겠다.
COPY . /app
RUN npm i
RUN npm run build


FROM nginx

COPY --from=build /app/dist/webfront /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
