#!/bin/bash

set -euo pipefail

rm -rf /data/plugins/*.jar
rm -rf /data/plugins/.paper-remapped

rsync -a /overlays/ /data/

chown root -R /data/

# the original entrypoint script
exec /image/scripts/start
