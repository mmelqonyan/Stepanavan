#!/bin/bash

arr=("1" "2" "3" "4" "5" "6" "7" "8" "9")	# Զանգվա ծի ինդեքսավորում

clear


function game_area {
  echo "Game area:              Stepanavan/Training's GOOD job! "   
  echo "7  | 8 | 9"
  echo "___|___|___"
  echo "4  | 5 | 6"
  echo "___|___|___"
  echo "1  | 2 | 3"
  echo "   |   |  "



  echo
  echo -e "${arr[6]}  | ${arr[7]} | ${arr[8]}"
  echo -e "___|___|___"
  echo -e "${arr[3]}  | ${arr[4]} | ${arr[5]}"
  echo -e "___|___|___"
  echo -e "${arr[0]}  | ${arr[1]} | ${arr[2]}"
  echo -e "   |   |"
}



function check {					# Ստ ուգում է անկյունային,ուղղահայաց և հորիզոնական վանդակների  լրացվածությունը

              if [[ ( ${arr[0]} == ${arr[1]} ) && ( ${arr[1]} == ${arr[2]} ) ]]; then
                      echo "Congratulations ${arr[0]} WON !!!"; exit ; fi

              if [[ ( ${arr[3]} == ${arr[4]} ) && ( ${arr[4]} == ${arr[5]} ) ]]; then
                      echo "Congratulations ${arr[3]} WON !!!"; exit ; fi

              if [[ ( ${arr[6]} == ${arr[7]} ) && ( ${arr[7]} == ${arr[8]} ) ]]; then
                      echo "Congratulations ${arr[6]} WON !!!"; exit ; fi

              if [[ ( ${arr[0]} == ${arr[3]} ) && ( ${arr[3]} == ${arr[6]} ) ]]; then
                      echo "Congratulations ${arr[0]} WON !!!"; exit ; fi

              if [[ ( ${arr[1]} == ${arr[4]} ) && ( ${arr[4]} == ${arr[7]} ) ]]; then
                      echo "Congratulations ${arr[1]} WON !!!"; exit ; fi

              if [[ ( ${arr[2]} == ${arr[5]} ) && ( ${arr[5]} == ${arr[8]} ) ]]; then
                      echo "Congratulations ${arr[2]} WON !!!"; exit ; fi

              if [[ ( ${arr[0]} == ${arr[4]} ) && ( ${arr[4]} == ${arr[8]} ) ]]; then
                      echo "Congratulations ${arr[0]} WON !!!"; exit ; fi

              if [[ ( ${arr[2]} == ${arr[4]} ) && ( ${arr[4]} == ${arr[6]} ) ]]; then
                      echo "Congratulations ${arr[2]} WON !!!"; exit ; fi


}


function check_repeat_index() # Ստուգում է լրացված վանդակների կրկնությունը
{
  while [[  ${arr[$index-1]} != $index  ]]
  do

       echo -e "\n Enter correct step: "
       read index
       game_area
  done
}


function game_X0(){


game_area			  # Դուրս է բերում մուտք անելու հրահանգը
for (( i = 0; i < 9; i++ )); do
  if [[ $((i % 2)) == 0 ]]
  then
       echo "First player's turn: (X)"
       read index
       check_repeat_index
       arr[$index-1]='X'
       clear
       game_area

   else
       echo "Second player's turn: (0)"
       read index
       check_repeat_index   #ստուգում է արդյոք վանդակի տվյալ տեղը ազատ է թե չէ
       arr[$index-1]='0'
       clear
       game_area

  fi
  check		 # Ստ ուգում է թե ով է հա ղթել

done
clear
game_area

echo "No Winner!"


}

game_X0
