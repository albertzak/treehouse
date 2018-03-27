#!/bin/bash

set -e

git clone --recurse-submodules git://github.com/ninjablocks/433Utils.git
pushd 433Utils/RPi_utils
make
popd
