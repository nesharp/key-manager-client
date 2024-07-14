﻿FROM node:18-alpine

WORKDIR /app

COPY package.json .
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000