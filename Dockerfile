# Step 1: Use the official lightweight Nginx Alpine base image
FROM nginx:alpine

# Step 2: Set the maintainer/label information
LABEL maintainer="HashTek Solutions Demo <info@hashteksolutions.com>"
LABEL description="Static multi-page website for HashTek Solutions served via Nginx"

# Step 3: Remove default Nginx website files
RUN rm -rf /usr/share/nginx/html/*

# Step 4: Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Step 5: Copy all static website assets to Nginx html directory
COPY . /usr/share/nginx/html/

# Clean up non-web assets from webroot inside the container
RUN rm -f /usr/share/nginx/html/Dockerfile \
          /usr/share/nginx/html/nginx.conf \
          /usr/share/nginx/html/docker-compose.yml \
          /usr/share/nginx/html/README.md \
          /usr/share/nginx/html/.dockerignore

# Step 6: Expose HTTP port 80
EXPOSE 80

# Step 7: Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
