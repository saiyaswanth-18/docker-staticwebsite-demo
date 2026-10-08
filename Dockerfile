# 1. Base image with Nginx pre-installed
FROM nginx:alpine

# 2. Copy all website files into Nginx web folder
COPY . /usr/share/nginx/html

# 3. Port where Nginx listens
EXPOSE 80

# 4. Command to start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]
