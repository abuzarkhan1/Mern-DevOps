FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally 
RUN npm install -g nodemon

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 8000

# Command to start the application
CMD ["npm", "run", "dev"]
