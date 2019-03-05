#!/bin/bash

echo "alias urut="`pwd`/$0"" >> ~/.bashrc 
export PATH=$PATH:`pwd`
source ~/.bashrc

echo "Enter path : "

read path

if [ -f $path ]

then
        echo "File exists"
else
        echo "Does not exsist"
fi    

