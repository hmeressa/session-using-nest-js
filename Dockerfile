# Use an official Node.js runtime as a parent image
FROM node:20.9-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
