FROM node:latest
WORKDIR /api

COPY . .

RUN rm -rf node_modules

RUN yarn install

CMD [ "yarn", "dev" ]

EXPOSE 3333

