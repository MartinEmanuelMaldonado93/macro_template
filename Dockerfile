FROM node:18-alpine AS build

WORKDIR /app
# copia el package.json y package-lock.json incluido
COPY package*.json .
COPY . .
# ci stands for clean install, more secure
RUN npm ci
RUN npm run build

FROM nginx:1.17.1-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/ /usr/share/nginx/html
RUN chmod 777 -R /usr/share/nginx/html/assets/
