FROM resin/raspberrypi3-buildpack-deps

WORKDIR /usr/src/app/

COPY install/wiringpi.sh .
RUN ./wiringpi.sh

COPY install/443utils.sh .
RUN ./443utils.sh

CMD ["/usr/src/app/443Utils/RPi_utils/RFSniffer"]
