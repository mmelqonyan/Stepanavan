#!/bin/bash
if [ $1 = ~/Desktop ] || [ $1 = ~/Desktop/ ]
then
echo "No permission!"
else
cd $1
ls -la
fi
