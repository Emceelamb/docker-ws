# Binding directories Host and Container directories

This Docker Image provides an example of binding a directories from your host machine to your Docker container, allowing you to use manipulate data on your host machine from your container.

## Instructions
1. The `Dockerfile` provides build Docker build instructions to install the packages and a command when running the container.
2. A `volume` is created in the container which will be used to mount 
3. Build the Docker image with: `docker build -t wget`
4. Run a container and bind the /data directory with the `-v`  flag:
```
docker run -v ./data:/data wget
```

Instead of using lengthy Docker commands in the CLI, you can use `docker-compose` in order to orchestrate and predefine the Docker run instructions.

Inside `docker-compose.yml` we map the volumes with the `volumes` keyword.

Now we can run the container with `docker-compose up` and the volume will be mapped automatically.

