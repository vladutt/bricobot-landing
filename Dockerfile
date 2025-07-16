FROM node:18 AS build-fe

# Install bash and curl
RUN apt-get update && apt-get install -y bash curl

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to the PATH manually
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

COPY package*.json ./

COPY . .

RUN bun i

RUN bun run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build-fe /app/out /usr/share/nginx/html
COPY --from=build-fe /app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]