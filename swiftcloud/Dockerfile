# Use an official Node.js runtime as the base image
FROM node:18-alpine3.16 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install 

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript application (if needed)
# Replace "npm run build" with the actual build command
RUN npm run build

# Generate Prisma client
RUN npx prisma generate

# Production-ready image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=builder /app .

# Expose the port your application listens on (adjust as needed)
EXPOSE 3000

# Specify the startup command for your application
CMD ["node", "build/index.js"]
