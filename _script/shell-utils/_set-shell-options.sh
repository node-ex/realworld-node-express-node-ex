#!/usr/bin/env bash

export _SHELL_OPTIONS_=''
export _PIPEFAIL_=''

_SHELL_OPTIONS_="$-"

# Treat unset variables as an error when substituting. [nounset]
_nounset_="${-//[^u]/}"
[[ -z "$_nounset_" ]] && set -u
unset _nounset_

# Exit immediately if a command exits with a non-zero status. [errexit]
_errexit_="${-//[^e]/}"
[[ -z "$_errexit_" ]] && set -e
unset _errexit_

# If set, the ERR trap is inherited by shell functions. (related to e) [errtrace]
_errtrace_="${-//[^E]/}"
[[ -z "$_errtrace_" ]] && set -E
unset _errtrace_

# If set, the DEBUG trap is inherited by shell functions. [functrace]
#_functrace_="${-//[^T]/}"
#[[ -z "$_functrace_" ]] && set -T
#unset _functrace_

# Print shell input lines as they are read. [verbose]
#_verbose_="${-//[^v]/}"
#[[ -z "$_verbose_" ]] && set -v
#unset _verbose_

# Print commands and their arguments as they are executed. [xtrace]
#_xtrace_="${-//[^x]/}"
#[[ -z "$_xtrace_" ]] && set -x
#unset _xtrace_

# Set the variable corresponding to option-name:
# the return value of a pipeline is the status of
# the last command to exit with a non-zero status,
# or zero if no command exited with a non-zero status.
shopt -q -o pipefail || _PIPEFAIL_="$?"
[[ "${_PIPEFAIL_}" -eq 1 ]] && set -o pipefail
#shopt -o pipefail
