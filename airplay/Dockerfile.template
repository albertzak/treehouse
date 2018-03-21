FROM resin/%%RESIN_ARCH%%-systemd
# FROM resin/armv7hf-systemd

WORKDIR /tmp/install/

COPY ./install/apt.sh .
RUN ./apt.sh

COPY ./install/shairport-sync.sh .
RUN ./shairport-sync.sh


ENV INITSYSTEM on
ENV AIRPLAY_NAME Purumae
ENV OUTPUT_NAME Speaker
ENV DBUS_SESSION_BUS_ADDRESS unix:path=/host/run/dbus/system_bus_socket

WORKDIR /usr/src/app
COPY start.sh .

CMD [ "/usr/src/app/start.sh" ]
