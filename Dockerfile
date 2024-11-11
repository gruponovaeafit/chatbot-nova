FROM node:18-alpine AS build

WORKDIR /app

ARG VITE_SERVER_URL

ENV VITE_SERVER_URL=$VITE_SERVER_URL

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
