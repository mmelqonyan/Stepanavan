#!/bin/bash

cd $1
if [ ! -f "$2" ]; then
    echo "Your file $2 not exist"
else echo "Your file $2 exist"
fi



