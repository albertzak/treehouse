FROM resin/raspberrypi3-buildpack-deps

WORKDIR /usr/src/app/

COPY install/wiringpi.sh .
RUN ./wiringpi.sh

COPY install/433utils.sh .
RUN ./433utils.sh

CMD ["/usr/src/app/433Utils/RPi_utils/RFSniffer"]
