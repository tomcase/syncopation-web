FROM node:14.1.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ARG REACT_APP_API_URL
ARG NODE_ENV
ENV REACT_APP_API_URL ${REACT_APP_API_URL}
ENV NODE_ENV ${NODE_ENV}
COPY package.json ./
COPY yarn.lock ./
RUN yarn --network-timeout 600000 
RUN yarn global add react-scripts@4.0.3
COPY . ./
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
