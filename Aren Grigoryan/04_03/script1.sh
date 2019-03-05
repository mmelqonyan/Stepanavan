#!/bin/bash



if [ $1!=~/Desktop ] || [ $1!=~/Desktop/ ] 
then
	cd $1
	ls -la
else
	echo "Directory not exist"
fi
