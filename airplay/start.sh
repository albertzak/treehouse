#!/bin/sh

set -e

echo "--> Starting shairport-sync"
shairport-sync -vvv -a "$AIRPLAY_NAME" -- -d hw:$OUTPUT_NAME

echo "--> Started shairport-sync"
