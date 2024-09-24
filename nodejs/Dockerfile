# Use an official Node runtime as the parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Make port 3000 available outside the container
EXPOSE 8080

# Define the command to run the app
CMD ["node", "server.js"]