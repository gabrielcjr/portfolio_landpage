FROM nginx:1.19.10-alpine
WORKDIR /var/www/html
COPY . .
RUN rm /etc/nginx/conf.d/default.conf
COPY *.conf /etc/nginx/conf.d
#RUN apk update && apk add bash && apk add vim
EXPOSE 80
