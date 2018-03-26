#!/bin/bash

mkdir -p /data/.homebridge/
cp /usr/src/app/config.json /data/.homebridge/config.json

DEBUG=* homebridge \
  --debug \
  --user-storage-path /data/.homebridge \ --plugin-path /usr/src/app/node_modules/
