# select the base node image
FROM node:lts-alpine

# specify the directory to work in the container
# with an absolute path. If the specified directory
# does note exist, it will be created automatically.
WORKDIR /app

RUN ls

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./


# Install npm
RUN npm install

# Copy the source. Describe in the order of 
# [Source path of local environment] and 
# [Path to be placed in container]
COPY ./app/ .

# Start Vue Server
CMD ["npm", "run", "serve"]
