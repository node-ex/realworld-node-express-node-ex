#!/usr/bin/env bash

SCRIPT_FOLDER='./_script'

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_set-shell-options.sh

# Write your script here.
bash ${SCRIPT_FOLDER}/mongo/container-stop.sh || true
bash ${SCRIPT_FOLDER}/mongo/volume-rm.sh || true
bash ${SCRIPT_FOLDER}/mongo/image-rm.sh

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_unset-shell-options.sh
