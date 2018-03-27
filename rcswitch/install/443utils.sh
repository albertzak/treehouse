#!/bin/bash

set -e

git clone –recursive git://github.com/ninjablocks/433Utils.git
pushd 433Utils/RPi_utils
make
popd
