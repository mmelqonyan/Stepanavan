#!/bin/bash

echo "alias urut="`pwd`/$0"" >> ~/.bashrc 
export PATH=$PATH:`pwd`
source ~/.bashrc

if [[ $1 == *"/home/$USER/Desktop"* ]]
then
	if [ $EUID == 0 ]
	then
		ls $1 -la
	else 
		echo "Permission denied:  Try with sudo "
	fi
else
	ls $1 -la
fi

