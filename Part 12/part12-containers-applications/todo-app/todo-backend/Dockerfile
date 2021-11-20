FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

CMD DEBUG=todo-backend:* npm start
