### Vue Client App

Vue3 - frontend running using docker

### Getting Started (Run locally)
In the terminal :

### Build the image for vue app.

```s
$ cd client
# -t - tag the image
# . - specifies the path where Dockerfile is located
$ docker build -t vueapp:0.0.1 .

# check the created images
$ docker images
```

### Run the image

```s
$ docker run --name vue_app_container --rm -it -d -p 8080:8080 vueapp:0.0.1

# --name - specify the name of the container, makes it easier to manage
# --rm - Automatically deletes the container when it is stopped.
# --it - It inputs and outputs terminal commands nicely
# -d Run the container in the background
# -p 8080:8080 - Forwards the local port to the containers port
# vueapp: 0.0.1: Starts version 0.0.1 0f the vueapp image
```

### Manage running containers

```s
# Display running containers
$ docker ps 

# Stop running containers 
$ docker stop vue-app-container
```

### For production build 

```s
# build the image
$ docker build -f Dockerfile.prd -t vueapp-nginx:0.0.1 .

# run the container
$ docker run --name vue-nginx-container --rm -it -d  -p 8080:80 vueapp-nginx:0.0.1

# display running containers 
$ docker ps 

# stop running containers 
$ docker stop vue-nginx-container

```