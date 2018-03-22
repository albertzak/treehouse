FROM node:8 as builder
WORKDIR /root/
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM alpine:3.4
RUN apk add --update nginx && rm -rf /var/cache/apk/*
ADD nginx.conf /etc/nginx/nginx.conf
RUN mkdir /www-data
COPY --from=builder /root/build /www-data
EXPOSE 80
CMD ["nginx"]
