# Multi-stage Build Dockerfile
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular Universal (SSR) application
RUN npm run build

# Use a smaller Node.js image for the final runtime
FROM node:18-alpine AS runner

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/dist /app/dist

# Install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 4000

# Start the Angular SSR app
CMD ["node", "dist/angular-features/server/server.mjs"]
