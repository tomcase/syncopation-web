FROM node:14.1.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ARG REACT_APP_API_URL
COPY package.json ./
COPY yarn.lock ./
RUN yarn --network-timeout 600000 
RUN yarn add react-scripts@3.4.1 -g 
COPY . ./
RUN REACT_APP_API_URL=${REACT_APP_API_URL} NODE_ENV=production yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
