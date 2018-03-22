#!/bin/sh

set -e

# Set host-name and enable-dbus
sed -i -e "s@#enable-dbus=yes@enable-dbus=yes@" -e "s@#host-name=foo@host-name=$(echo $AIRPLAY_NAME)@" /etc/avahi/avahi-daemon.conf

echo "--> Stopping avahi-daemon"
systemctl stop avahi-daemon || true

echo "--> Starting avahi-daemon"
avahi-daemon --no-drop-root --daemonize

sleep 1s

echo "--> Available audio devices"
aplay -l

echo "--> Starting shairport-sync"
shairport-sync -vvv -a "$AIRPLAY_NAME" -- -d hw:$OUTPUT_NAME

echo "--> Started shairport-sync"
