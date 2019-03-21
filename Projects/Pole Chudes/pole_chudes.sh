#!/bin/bash

function getQuestionFromDB() {
    index=0
    while IFS="|" read -r question answer trash
    do
        QA=(["question"]=$question ["answer"]=$answer)
        if [ "$1" == "$index" ]; then
            return
        fi
        index=$((index+1))
    done < "db"
    QA=()
}


function killTheBoy(){
	case $1 in
		
	0)	 
       echo -e "${green} ___ "
		echo   "|o.o|"
		echo   "|_-_|"
		echo   "  |  "
		echo   " /|\ "
		echo   "  |  "
              echo -e  " / \ ${nocolor} "

	;;
	
	1)
    echo -e    "${yellow} _________"
		echo    "|   ___   |   Осталось попыток: 2"
		echo    "|  |o.o|  |"
		echo    "|  |_-_|  |"
		echo    "|    |    |"
		echo    "|   /|\   |"
		echo    "|    |    |"
              echo -e   "|   / \   |${nocolor}"
	;;



	2)
	echo -e   "${red}__________ "
		echo    "|    |    |"
		echo    "|   _|_   |    Осталось попыток: 1"
		echo    "|  |0.0|  |"
		echo    "|  |_-_|  |"
		echo    "| (((|))) |"
		echo    "|   /|\   |"
		echo    "|    |    |"
		echo    "|   / \   |"
              echo -e   "|         |${nocolor}"
	;;
	esac
}


function getCountOfQuestionFromDB() {
    while read -r
    do
        COUNT_OF_QUESTIONS=$((COUNT_OF_QUESTIONS+1))
    done < "db"
}

clear

COUNT_OF_QUESTIONS=0;
declare -A QA



startGame()
{
	getCountOfQuestionFromDB
	rand=$[ $RANDOM % $COUNT_OF_QUESTIONS ]
	getQuestionFromDB $rand
	QUESTIONS="${QA[question]}"
	ANSWER="${QA[answer]}"
	len=${#ANSWER}

	green='\033[0;32m'
        red='\033[0;31m'
	yellow='\033[1;33m'
	nocolor='\033[0m'

    a='|-?-|'
	for (( i = 0; i < $len; i++ ));  #adding ? symbols to array
	do
		letterBoxes[i]=$a
	done

	echo -e "${yellow}WELCOME!"
	echo -e "\t" $QUESTIONS${nocolor}
	echo -e "\n" 
	echo -e "\t ${letterBoxes[@]}"
	echo -e "\n" 


	countOfMistakes=0
	while [ $countOfMistakes -lt 3 ]
	do
                        

		killTheBoy $countOfMistakes
		if [ "$countOfMistakes" -gt 0 ]; then
		echo -e "\t${green} ${letterBoxes[@]}${nocolor}"
		fi
		echo -e "${yellow}Enter a letter:${nocolor} "
		read letter
		clear
	



	
		if [[ "${letterBoxes[@]}" =~ "$letter" ]]             
		then
			if [ "$letter" == '?' ]
			then
				echo -e "Hushum #1: "          #Lyov jan stex kavelacnes qo hushumy
				echo -e "\t ${letterBoxes[@]}" 
	
			else

			countOfMistakes=$(($countOfMistakes+1))
			echo -e "${red}You have already guessed this letter.${nocolor}"
			fi
		fi


		echo -e "\t"${yellow} $QUESTIONS${nocolor}
		if [[ $letter == *"$ANSWER"* ]]; then
			echo $ANSWER
			echo -e "${green}CONGRATULATIONS!!! You win."
			exit
		fi
		if [[ ! "${ANSWER[*]}" == *"$letter"* ]]; then
		
			if [ "$letter" == '?' ]
                	then
               		continue 
		
			else
				countOfMistakes=$(($countOfMistakes+1))
				echo -e "${red} Try again${nocolor}  "
				continue
			fi	


		fi

	
		for (( i=0; i<${#ANSWER}; i++ )); 
		do
			current_char="${ANSWER:$i:1}"
			if test "$current_char" == "$letter" ; 
			then
				letterBoxes[i]="| $letter |"	
				
				


				if [[ ! "${letterBoxes[@]}" =~ '?' ]]
				then
					echo -e "${green}CONGRATULATIONS!!! You win."
					exit	
				fi
			fi

		done
		echo -e "\t ${letterBoxes[@]}"
		unset letter
		
		
	
	done
	
	echo -e " ${red} # YOU LOSE. #${nocolor} "
	echo -e "\t${yellow}Answer is: ${green} $ANSWER${nocolor}"	
}

startGame
