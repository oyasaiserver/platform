#!/bin/bash

set -euo pipefail

chown root -R /data/

mkdir -p /data/plugins
cp -f /plugins/* /data/plugins/

# the original entrypoint script
exec /image/scripts/start
