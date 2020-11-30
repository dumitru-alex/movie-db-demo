FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# Copy app source code
ADD . /usr/src/app

# Compile
RUN yarn build

#Expose port and start application
EXPOSE 8080

CMD [ "npm", "start" ]