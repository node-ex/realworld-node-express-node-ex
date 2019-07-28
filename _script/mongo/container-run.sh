#!/usr/bin/env bash

SCRIPT_FOLDER='./_script'

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_set-shell-options.sh
# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/mongo/_set-mongo-variables.sh

# Write your script here.
docker container run \
  --name "${DOCKER_MONGO_CONTAINER_NAME}" \
  --env 'MONGO_INITDB_ROOT_USERNAME=root' \
  --env 'MONGO_INITDB_ROOT_PASSWORD=qwerty' \
  --publish '27017:27017' \
  --rm \
  --init \
  --detach \
  "${DOCKER_MONGO_IMAGE_NAME_TAG}"

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/mongo/_unset-mongo-variables.sh
# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_unset-shell-options.sh
