FROM node:20-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM httpd:2.4 AS deploy

COPY --from=build /app/build /usr/local/apache2/htdocs

EXPOSE 80