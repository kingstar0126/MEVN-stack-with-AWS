### Server

Server app built using Node Express
The default port that is used for the server is 3080.

### Build docker image

```s
$ cd server
$ docker build . -t <your-username>/express_app
```

### Run the image

```s
$ docker run -p 3080:3080 -d <your username>/express_app
```

Print the output of your app:

# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:3080

If you need to go inside the container you can use the exec command:

# Enter the container
$ docker exec -it <container id> /bin/bash
or
$ docker exec -it <container_id> sh -c <command>
