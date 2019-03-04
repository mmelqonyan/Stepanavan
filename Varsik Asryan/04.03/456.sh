#!/bin/bash

echo -n "Enter the file name: "
read ix
if [ ! -f "$ix" ]
then
echo "File not exist."
else
echo "File exist."
fi
