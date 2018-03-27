FROM resin/raspberrypi3-node

WORKDIR /usr/src/app/

COPY install/wiringpi.sh .
RUN ./wiringpi.sh

COPY install/433utils.sh .
RUN ./433utils.sh

COPY package.json .
RUN npm install --production

COPY . .

CMD ["/usr/src/app/start.sh"]
