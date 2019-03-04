# օգտագորխեք ՛echo 'alias name="bash filename.sh"' >> ~/.bashrc՛ հրամանը որպեսզի անունը գրելով տարբեր տերմինալներում հրամանը աշխատի
#!/bin/bash
alias name1='bash bash2.sh'
cd $1

if [ -f $2 ]
then
printf "file is exist  $2\n"
else
printf "file not exist \n"
fi