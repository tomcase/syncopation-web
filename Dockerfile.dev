# pull official base image
FROM node:14.1.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_API_URL=${REACT_APP_API_URL} 
ENV NODE_ENV=${NODE_ENV}

# start app
CMD ["yarn", "start"]

