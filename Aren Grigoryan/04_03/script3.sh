#!/bin/bash

echo "Enter name of your file"
read name
cd $1

if [ ! -f "$name" ]; then
    echo "Your file $name not exist"
else echo "Your file $name exist"
fi


