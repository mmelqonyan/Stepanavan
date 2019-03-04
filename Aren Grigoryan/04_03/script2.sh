#!/bin/bash
FILE=$2
cd $1
if [ ! -f "$2" ]; then
    echo "Your file $FILE not exist"
else echo "Your file $FILE exist"
fi



