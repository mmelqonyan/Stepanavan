#!/bin/bash
cd $1
FILE=$2

if [ ! -f "$FILE" ]; then
    echo "File $FILE does not exist."
else
echo "Done!"
fi





















