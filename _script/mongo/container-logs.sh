#!/usr/bin/env bash

SCRIPT_FOLDER='./_script'

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_set-shell-options.sh

# Write your script here.
docker container logs \
  --follow \
  mongo-realworld

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_unset-shell-options.sh
