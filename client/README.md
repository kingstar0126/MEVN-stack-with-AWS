### Vue Client App

Vue3 - frontend running using docker

### Getting Started (Run locally)

You need docker installed to run the webapp. Enter the below commands in the terminal :


### Method 1 : Using Docker Compose
Use docker-compose to run the vue-app easily without building images manually.

```s
$ cd client

# -d - starts in the background
$ docker-compose up -d 

# terminate the container 
$ docker-compose down

# update changes to the container
$ docker-compose build
```
#### Run development mode

```s
$ docker-compose -f docker-compose.dev.yml up
```
or you can directly copy the content of docker-compose.dev inside docker-compose.yml and run the below command to run the dev:

```s
$ docker-compose up
```

This will start the vue-app in http://localhost:8080 (in watch mode)
### Method 2 :Using Docker

In this method, you have to manually create the images and run the container using Docker.

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

We have a seperate Dockerfile.prd that is used to build the production build of the vue webapp. You can use the below
commands to build the image and run the container. It uses nginx as server.


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

### Useful Docker Compose commands

```s
# check docker-compose version
$ docker-compose --version

# create and start containers
$ docker-compose up

# start services with detached mode
$ docker-compose -d up

# start specific service
$ docker-compose up <service-name>

# list images
$ docker-compose images

# build with no cache
$ docker-compose build --no-cache

# list containers
$ docker-compose ps

# start service
$ docker-compose start

# stop services
docker-compose stop

# display running containers
$ docker-compose top

# kill services
$ docker-compose kill

# remove stopped containers
$ docker-compose rm

# stop all contaners and remove images, volumes
$ docker-compose down
```

### ref
https://mherman.org/blog/dockerizing-a-vue-app/
https://www.middlewareinventory.com/blog/docker-vuejs/#Test_Our_Web_Application_Locally_Before_Packaging_it_as_Container
https://towardsdatascience.com/deploying-a-docker-container-with-ecs-and-fargate-7b0cbc9cd608
https://www.loginradius.com/blog/async/implementing-authentication-on-vuejs-using-jwt/
https://github.com/sujaykundu777/yelb
https://github.com/Kong/kong
https://aws.amazon.com/blogs/containers/deploy-applications-on-amazon-ecs-using-docker-compose/