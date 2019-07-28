#!/usr/bin/env bash

SCRIPT_FOLDER='./_script'

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/mongo/_set-mongo-variables.sh

docker container exec \
  --tty \
  --interactive \
  "${DOCKER_MONGO_CONTAINER_NAME}" \
  /bin/bash

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/mongo/_unset-mongo-variables.sh
