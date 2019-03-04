#!/bin/bash



if [$1!=~/repo] 
then
	cd $1
	ls -la
else
	echo "Directory not exist"
fi
