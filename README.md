# Docker Workshop

Workshop to demonstrate Docker containerization using express and localtunnel. The `volume-example` provides an example of running Docker and mounting a volume to a host so you can share data between the container and host machine.

There are two examples provided to demonstrate using docker with volume mounting as well as docker-compose to network between two containers.

## Key Concepts
* Dockerfile - defines all the tasks that need to be executed
* Docker image -  packaged, versioned application that contains all the dependencies of that application
* Docker container - a running instance of a program
* Docker Compose - provides a way to create reproducible Docker containers using a config file instead of extremely long Docker commands and multiple containers
* Docker Hub - repository for official and community Docker images

## Docker basics
Docker is used for containerizing your applications so that they run in isolated environments on your machine. They allow for a more unified development and production environment. 

Basic commands:
* `docker ps` lists running docker containers
* `docker ps -a` lists all docker containers
* `docker run <image>` will run a docker container from an image
* `docker build -t <Tagname> . ` will build a docker image from a Dockerfile with a tag name
* `docker run -it ubuntu bash` will run ubuntu container and enter the interactive terminal
* `docker images` lists images on your machine
* `docker rmi <image id>` will delete an image from your machine
* `docker system prune -a` deletes all containers and images from your machine



