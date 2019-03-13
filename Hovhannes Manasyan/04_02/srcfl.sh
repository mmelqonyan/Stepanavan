#!/bin/bash
cd $1
echo -n "Please еnter the file name: "
read var
if [ ! -f "$var" ]
then
echo "File not exist."
else
echo "Done!"
fi
