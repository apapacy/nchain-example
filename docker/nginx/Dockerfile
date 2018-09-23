FROM ubuntu:18.04


RUN apt-get update && \
  apt-get install -y nginx-extras

RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
