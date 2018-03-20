FROM node:latest

WORKDIR /var/lib/app

COPY . ./

RUN npm install

RUN npm run webpack

RUN npm install -g http-server

CMD [ "http-server", "-p", "12000", "/var/lib/app/public" ]