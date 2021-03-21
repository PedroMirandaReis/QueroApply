FROM node:15.12.0-alpine3.13

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
COPY . /app

RUN yarn install

EXPOSE 8000

CMD ["yarn", "start"]