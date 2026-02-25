#!/bin/sh
set -e
finch build -t generate-bundles scripts
finch run --rm -v "$(pwd)":/app generate-bundles
git checkout -- package-lock.json
