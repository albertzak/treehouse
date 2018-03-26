FROM node:8

ENV INITSYSTEM on

WORKDIR /tmp/install/
COPY ./install/apt.sh .
RUN ./apt.sh

RUN npm install \
  --global \
  --production \
  --unsafe-perm \
  homebridge

WORKDIR /usr/src/app
COPY package.json package.json
RUN JOBS=MAX npm install \
  --production \
  --unsafe-perm \
  && npm cache clean \
  && rm -rf /tmp/*

COPY . ./

CMD ["/usr/src/app/start.sh"]
