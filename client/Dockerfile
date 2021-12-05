# select the base node image
FROM node:lts-alpine as build-stage

# install simple http server for serving static content
RUN npm install -g http-server

# specify the directory to work in the container
# with an absolute path. If the specified directory
# does note exist, it will be created automatically.
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY ./vue_app/package*.json ./

# Install npm
RUN npm install

# Copy the source. Describe in the order of 
# [Source path of local environment] and 
# [Path to be placed in container]
COPY ./vue_app .

# run production build
RUN npm run build

# Expose port
EXPOSE 8080

# Start Vue Server
CMD [ "http-server", "dist" ]

