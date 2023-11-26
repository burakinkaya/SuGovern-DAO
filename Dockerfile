# Use the official Node.js 18 image as a parent image
FROM node:alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's source code from your host to your image filesystem.
COPY . .

# Build the application
RUN npm run build

# Use the official Node.js 18 image for the runner stage
FROM node:alpine

WORKDIR /usr/src/app

# Copy the build artifacts from the builder stage
COPY --from=builder /usr/src/app/next.config.js ./
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Your app binds to port 3000 by default, expose this port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
