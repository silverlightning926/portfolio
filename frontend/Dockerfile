FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_API_URL=http://backend:4000

RUN npm run build

EXPOSE 3000

CMD [ "node", "./build/index.js" ]