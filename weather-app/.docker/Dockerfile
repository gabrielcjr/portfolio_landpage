FROM node:alpine3.14

WORKDIR usr/src/app

COPY . .

RUN npm install

#RUN apk update && apk add bash && apk add vim

EXPOSE 4000

CMD ["npm", "start"]


