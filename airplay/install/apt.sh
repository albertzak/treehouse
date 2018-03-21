#!/bin/bash

set -e

apt-get update

apt-get install -y \
  git \
  curl \
  build-essential \
  autoconf \
  automake \
  cmake \
  libtool \
  libdaemon-dev \
  libasound2-dev \
  libpopt-dev \
  libconfig-dev \
  libnss-mdns \
  libavahi-client-dev \
  libssl-dev \
  libsoxr-dev \
  ca-certificates \

rm -rf /var/lib/apt/lists/*
