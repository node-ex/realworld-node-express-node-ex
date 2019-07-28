#!/usr/bin/env bash

SCRIPT_FOLDER='./_script'

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_set-shell-options.sh
# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/mongo/_set-mongo-variables.sh

# Write your script here.
docker container run \
  --name mongo-temp \
  --rm \
  "${DOCKER_MONGO_IMAGE_NAME_TAG}" \
  mongod --help

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/mongo/_unset-mongo-variables.sh
# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_unset-shell-options.sh
