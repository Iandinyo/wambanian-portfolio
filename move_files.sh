#!/bin/bash

# Move all files from inner repository to root
mv wambanian-portfolio/* .
mv wambanian-portfolio/.* . 2>/dev/null || true

# Remove empty directories
rm -rf wambanian-portfolio
