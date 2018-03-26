#!/bin/bash

set -e

apt-get update

apt-get install -y \
  git \
  curl \
  build-essential \
  python \
  make \
  g++ \
  libavahi-compat-libdnssd-dev \
  libkrb5-dev \
  vim \
  net-tools \
  libnss-mdns \
  avahi-daemon \
  avahi-discover
  ca-certificates

rm -rf /var/lib/apt/lists/*
