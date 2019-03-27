#!/bin/bash

echo "alias urut="`pwd`/$0"" >> ~/.bashrc 
export PATH=$PATH:`pwd`
source ~/.bashrc


if [ -f $1 ]
then
        echo "File exists"
else
        echo "Does not exsist"
fi
