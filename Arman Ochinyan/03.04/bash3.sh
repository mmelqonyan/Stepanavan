# օգտագորխեք ՛echo 'alias name="bash filename.sh"' >> ~/.bashrc՛ հրամանը որպեսզի անունը գրելով տարբեր տերմինալներում հրամանը աշխատի
#!/bin/bash
alias name2='bash bash3.sh'
cd $1

printf "\n enter a file name "
read num

	if [ -f $num ]
	then
	printf "file is exist  $num\n"
	else
	printf "file not exist \n"
	fi
