#!/usr/bin/env bash

SCRIPT_FOLDER='./_script'

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_set-shell-options.sh
# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/mongo/_set-mongo-variables.sh

# Write your script here.
echo '>>> Images'
docker image ls "${DOCKER_MONGO_IMAGE_NAME_TAG}"
echo ''

echo '>>> Containers'
docker container ls --filter "name=${DOCKER_MONGO_CONTAINER_NAME}"
echo ''

echo '>>> Volumes'
docker volume ls --filter "name=${DOCKER_MONGO_CONTAINER_NAME}"
echo ''

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/mongo/_unset-mongo-variables.sh
# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_unset-shell-options.sh
