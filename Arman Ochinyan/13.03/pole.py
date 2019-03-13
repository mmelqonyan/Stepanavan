#!/usr/bin/python3
import random
import sys
import os

quation_answer={1:{'hh futbolist':'mxitaryan','hh shaxmatist':'petrosyan','hh tsanramartik':'vardanyan'}, 
                2:{'hh nkarich':'saryan','hh qandakaggorts':'qochar'},
                3:{'hh mayraqaxaq':'erevan','vrastani mayraqaxaq':'tbilisi','rusastani mayraqaxaq':'moskva'} }

categoria=input("Enter a categoria ")


if categoria == 'sport':
	   
	question, answer = random.choice(list(quation_answer[1].items()))

elif categoria == 'art':
	question, answer = random.choice(list(quation_answer[2].items()))
elif categoria == 'city':
	question, answer = random.choice(list(quation_answer[3].items()))
else:
	print("Incorrect categoria Try New ")
	sys.exit()

answer_len=len(answer)

print(question)


def view_board(count):
	
	if count == 1:

		print("|o.o|  Remained 2 opportunity")
		print("|_-_|")
		print("  |  ")
		print(">-|-<")
		print("  |  ")


	if count == 2:
		print("___________")
		print("|  |o.o|  |  Remained 1 opportunity")
		print("|  |_-_|  |")
		print("|    |    |")
		print("|  >-|-<  |")
		print("|    |    |")

	if count == 3:
		print("  _______  ")
		print("|    |    |   The boy died")
		print("|    |    |")
		print("|  |o.o|  |")
		print("|  |_-_|  |")
		print("|  ((|))  |")
		print("|  >-|-<  |")
		print("|    |    |")
		print("Game over")
		return
	return


def pole_chudes():
	view=[]
	os.system('clear')
	for i in range (0,answer_len):
		view.append("|-?-|")
	print(*view,sep=' ')
	tmp=0
	boy_call=0
	for j in range (0,answer_len):

		print(question)
		letter=input("Enter a letter ? ")

		if letter in str(view):
			print("You have already guessed this letter\n")
			print(*view,sep=' ')
			j -= 1
			continue

		index=0
		dont_match=0
		
		for i in range (0,answer_len):

			
			if answer[index] == letter:
				view[index]= '| '+letter+' |'
				tmp += 1
			else:
				dont_match += 1
				
			index += 1
			if tmp == answer_len:
				print(*view,sep=' ')
				print("Congratulations You WIN!!!")
				return
			elif dont_match == answer_len:
				boy_call += 1
				view_board(boy_call)
				if boy_call == 3:
					return
		
		print(*view,sep=' ')
		
	print("No Winner!!!")

pole_chudes()
