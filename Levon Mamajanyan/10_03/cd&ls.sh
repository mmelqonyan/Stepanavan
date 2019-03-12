#!/bin/bash
if [ $1 = ~/Desktop ] || [ $1 = ~/Desktop/ ]
then
echo "can't open source!"
else
cd $1
ls -la
fi
