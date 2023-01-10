FROM node:16

RUN apt-get update

WORKDIR /usr/src/app

COPY ./package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm","run","prod"]

