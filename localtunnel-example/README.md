# Localtunnel example

This provides an example for using docker-compose to orchestrate two services: localtunnel and express web app.

## Files
### Dockerfile-lt
Provides Docker build instructions to create an image with localtunnel

### Dockerfile-web
Provides build instructions for the express application.

### Dockerfile-rpi
Provides build instructions for localtunnel for Raspberry Pi host.

### docker-compose.yml
Docker compose instructions to orchestrate the services. Note we are linking the `lt` container to the `web` container so that localtunnel will forward to the web container

## Instructions
To run the with docker-compose:
0. First edit the `docker-compose.yml` to use the correct Dockerfile for your build machine.
1. Build containers with `docker-compose build`
2. Bring up with `docker-compose up`
3. Stop containers with `docker-compose down`
