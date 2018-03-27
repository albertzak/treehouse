#!/bin/bash

set -e

git clone git://git.drogon.net/wiringPi
pushd wiringPi
./build
popd
