### PART 1: Docker will build a PROD-ready version of the (React)Webapp
FROM node:14.15-alpine AS builder

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

### PART 2: Docker will build the Nginx image with the (React)Webapp
FROM nginx:1.18-alpine

# Setup correct timezone
RUN apk add --no-cache tzdata
ENV TZ=Europe/Berlin
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Prepare needed directories
RUN mkdir -p /usr/share/nginx/html/webapp
RUN mkdir -p /etc/nginx/nginxconfig.io
RUN mkdir -p /etc/nginx/sites-enabled
RUN mkdir -p /etc/nginx/ssl
RUN chmod 700 /etc/nginx/ssl

# COPY all needed nginx related files (config & ssl)
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/nginx/karmakurier.org.conf /etc/nginx/sites-enabled
COPY ./docker/nginx/staging.karmakurier.org.conf /etc/nginx/sites-enabled
COPY ./docker/nginx/security.conf /etc/nginx/nginxconfig.io
COPY ./docker/nginx/general.conf /etc/nginx/nginxconfig.io
COPY ./docker/nginx/proxy.conf /etc/nginx/nginxconfig.io
COPY ./docker/ssl-files/* /etc/nginx/ssl/
COPY ./docker/nginx/default_server.conf /etc/nginx/conf.d/default.conf

# Get webapp files from previous step (see PART 1)
COPY --from=builder /usr/src/app/build /usr/share/nginx/html/webapp

EXPOSE 80 443
