FROM resin/raspberrypi3-node:8

WORKDIR /usr/src/app/

COPY package.json .
RUN npm install --production

COPY . .

CMD ["node", "index.js"]
