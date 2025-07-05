# ─── Stage 1: Build React App ─────────────────────────────────────────────────
# Use an ARG to bust cache on every CI run
ARG CACHEBUST=1
FROM node:20-alpine AS build

WORKDIR /app

# Copy only package manifests to leverage Docker layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy rest of the source
COPY . .

# Build the PWA
RUN npm run build

# ─── Stage 2: Serve with NGINX ────────────────────────────────────────────────
FROM nginx:alpine

# Remove default config, if you want custom routing for client‑side apps:
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d/

# Copy build output
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Optional healthcheck
HEALTHCHECK --interval=30s --timeout=5s \
  CMD wget --quiet --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
