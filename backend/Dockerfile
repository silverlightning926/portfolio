FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-slim AS production

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

COPY --from=build /app/package*.json ./

RUN npm install --only=production

COPY --from=build /app/dist ./dist

EXPOSE 4000

CMD ["npm", "run", "serve"]