# Stage 1: Build the application
# Use a Node.js base image to install dependencies and build the application
FROM node:16-alpine as builder

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the rest of the code to the Docker image
COPY . .

# Build the application
RUN npm run build

# Stage 2: Set up the production environment
# Use a clean Node.js base image to set up the production environment
FROM node:16-alpine

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy the build artifacts from the builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/next.config.js ./next.config.js

# Your app binds to port 3000 by default, expose this port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
