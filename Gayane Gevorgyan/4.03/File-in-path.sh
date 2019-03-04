#!/bin/bash

read -p "enter a directory: " -i "$HOME/" -e path
cd $path
read -p "enter a file: " -i  -e file
find . -name "$file"


