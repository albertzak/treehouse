#!/bin/bash

echo '--> Starting RFSniffer'
/usr/src/app/433Utils/RPi_utils/RFSniffer &

echo '--> Starting relay'
node /usr/src/app/index.js
