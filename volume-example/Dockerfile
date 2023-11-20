# We're using Ubuntu as a base image to build our image from
FROM ubuntu

# This creates a /data directory inside the container which we will mount to our ./data on the docker host machine
VOLUME /data 

# Updates packages and installs wget 
RUN apt update && apt install wget -y

# The command will download an image to the /data directory 
CMD ["wget", "-O","/data/hello.png", "https://miro.medium.com/v2/resize:fit:1024/1*OohqW5DGh9CQS4hLY5FXzA.png"]

