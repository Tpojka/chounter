#!/bin/sh
# Build a Chrome Web Store ready zip (manifest.json at the archive root)
# containing only the files the extension needs at runtime.
set -eu

cd "$(dirname "$0")/.."

version=$(sed -n 's/^ *"version": *"\([^"]*\)".*/\1/p' manifest.json)
out="dist/chounter-$version.zip"

mkdir -p dist
rm -f "$out"
zip -qrX "$out" manifest.json popup.html js icons/*.png LICENSE.md -x '*.DS_Store'

echo "$out"
