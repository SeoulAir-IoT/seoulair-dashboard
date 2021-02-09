FROM node:alpine AS base

WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine

#COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist/seoulair-dashboard /usr/share/nginx/html
EXPOSE 80