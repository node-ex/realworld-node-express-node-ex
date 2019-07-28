#!/usr/bin/env bash

SCRIPT_FOLDER='./_script'

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_set-shell-options.sh

# Write your script here.
find . -type f -name '*.sh' -not \( -path '*.git*' -or -path '*node_modules*' \)
find . -type f -name '*.sh' -not \( -path '*.git*' -or -path '*node_modules*' \) -exec chmod u+x {} \;

# shellcheck disable=SC1090
source ${SCRIPT_FOLDER}/shell-utils/_unset-shell-options.sh
