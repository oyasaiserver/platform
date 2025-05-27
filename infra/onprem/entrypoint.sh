#!/bin/bash

set -euo pipefail

npx "https://pkg.pr.new/oyasaiserver/platform/@platform/server@${SHA}"

tail -f /dev/null
