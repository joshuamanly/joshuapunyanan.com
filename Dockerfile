# -- Stage 1: Build --
FROM node:22-alpine AS build

WORKDIR /app

# Copy dependency manifests first for better layer caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the production bundle
RUN npm run build


# -- Stage 2: Serve --
FROM node:22-alpine AS production

WORKDIR /app

# Install serve — a lightweight static file server with SPA support
RUN npm install -g serve

# Copy built assets from the build stage
COPY --from=build /app/dist ./dist

EXPOSE 3000

# Serve with SPA fallback (-s flag)
CMD ["serve", "-s", "dist", "-l", "3000"]
