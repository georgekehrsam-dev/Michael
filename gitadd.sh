#!/bin/bash

# Stop on error
set -e

echo "Staging all changes..."
git add -A

echo "Committing..."
git commit -m "Autocommit"

echo "Pushing to master..."
git push origin master

echo "Done! Now run: ./bash.sh"
