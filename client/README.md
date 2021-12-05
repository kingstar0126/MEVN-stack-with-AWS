### Client app

Vue 3 frontend running using docker


### Starting a container using Dockerfile

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
$ docker run --name vue_app_container --rm --it -d -p 8080:8080 vueapp:0.0.1

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
$ docker stop
```


