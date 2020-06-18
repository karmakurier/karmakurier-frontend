### PART 1: Docker will build a PROD-ready version of the (React)Webapp
FROM node:12.16.1-alpine AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install all used packages
COPY *.json ./
RUN npm install

# Prepare for production build
COPY public /usr/src/app/public
COPY src /usr/src/app/src

# Build the webapp
RUN npm run build

### PART 2: Docker will build an alpine image with the lighttpd webserver
FROM alpine:3.12

# Setup correct timezone
RUN apk add --no-cache tzdata
ENV TZ=Europe/Berlin
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install lighttpd
RUN apk update \
    && apk add lighttpd \
    && rm -rf /var/cache/apk/*

# Get webapp files from previous step (see PART 1)
COPY --from=builder /usr/src/app/build /var/www/localhost/htdocs

CMD ["lighttpd","-D","-f","/etc/lighttpd/lighttpd.conf"]

EXPOSE 8080