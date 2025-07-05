# -------- Stage 1: Build the React app --------
FROM node:20 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# -------- Stage 2: Serve it with NGINX --------
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Optional: Custom nginx config (skip for now)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
