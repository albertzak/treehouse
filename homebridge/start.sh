#!/bin/bash

cp config.json /data/.homebridge/config.json

DEBUG=* homebridge \
  --debug \
  --user-storage-path /data/.homebridge \ --plugin-path /usr/src/app/node_modules/
