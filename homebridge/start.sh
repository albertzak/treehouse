#!/bin/bash

# Set host-name and enable-dbus
sed -i -e "s@#enable-dbus=yes@enable-dbus=yes@" -e "s@#host-name=foo@host-name=$(hostname)@" /etc/avahi/avahi-daemon.conf

echo "--> Stopping avahi-daemon"
systemctl stop avahi-daemon || true

echo "--> Starting avahi-daemon"
avahi-daemon --no-drop-root --daemonize

sleep 1s

echo "--> Starting homebridge"
mkdir -p /data/.homebridge/
cp /usr/src/app/config.json /data/.homebridge/config.json

DEBUG=* homebridge \
  --debug \
  --user-storage-path /data/.homebridge \
  --plugin-path /usr/src/app/node_modules/
