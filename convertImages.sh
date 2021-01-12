#!/bin/bash

files=$(find . -name '*.jpg' -o -name '*.png')

for file in $files; do
  file_no_ext="${file%.*}"
  echo $file $file_no_ext.webp
  convert $file $file_no_ext.webp
done