#!/bin/bash

set -e

shairport_sync_version=3.1.7

cd /root
git clone https://github.com/mikebrady/shairport-sync.git
cd /root/shairport-sync
git checkout -q tags/$shairport_sync_version
autoreconf -i -f
./configure \
  --with-alsa \
  --with-pipe \
  --with-avahi \
  --with-ssl=openssl \
  --with-soxr \
  --with-metadata \
  --with-systemd
make
make install
