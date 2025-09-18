# --- Build Stage ---
FROM node:20-alpine AS build
WORKDIR /app

# Nur Lock + Package zuerst für besseren Cache
COPY package*.json ./
RUN npm ci

# Quellcode kopieren & bauen
COPY . .
RUN npm run build

# --- Runtime Stage ---
FROM nginx:1.27-alpine
ENV NGINX_ENTRYPOINT_QUIET_LOGS=1
# Unsere SPA-Config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Gebautes Frontend aus Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
# Nginx Entrypoint/CMD kommt aus Base-Image
