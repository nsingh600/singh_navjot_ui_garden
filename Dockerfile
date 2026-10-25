# Step 1: Build React App Production Bundle
FROM node:18-alpine AS build

WORKDIR /singh_navjot_ui_garden

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .

# Set DISABLE_ESLINT_PLUGIN=true to prevent ESLint module errors during build
ENV DISABLE_ESLINT_PLUGIN=true
RUN npm run build

# Step 2: Serve Production Build with Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /singh_navjot_ui_garden/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]