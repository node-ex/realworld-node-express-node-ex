#!/usr/bin/env bash
set -Eeuxo pipefail

export CPATH=""
export LD_LIBRARY_PATH=""
export LIBRARY_PATH=""
export PKG_CONFIG_PATH=""

touch /tmp/INSTALLED_PACKAGES
PACKAGES="build-essential automake autoconf"
if [ ! "$PACKAGES" == "$(cat /tmp/INSTALLED_PACKAGES)" ]; then
  cd /tmp
  rm -rf notroot
  git clone https://github.com/CrazyPython/notroot
  source notroot/bashrc
  notroot install $PACKAGES
  echo $PACKAGES > /tmp/INSTALLED_PACKAGES
else
  source /tmp/notroot/bashrc
fi

cd /app
pnpm install \
  --reporter silent \
  --prefer-offline \
  --audit false
npm run \
  --silent \
  start:original
