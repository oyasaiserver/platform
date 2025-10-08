#!/bin/bash

set -euo pipefail

rsync -a /overlays/ /data/

chown root -R /data/

# the original entrypoint script
exec /image/scripts/start
