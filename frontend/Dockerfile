FROM node:20-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production

RUN npm run build

FROM node:20-slim AS production

COPY --from=build /app/dist ./dist

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "dist"]
