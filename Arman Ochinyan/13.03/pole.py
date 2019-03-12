#!/usr/bin/python3
import random
import os

question_arr = ['HH varchapet','HH mayraqaxaq','hh harevan erkir' , 'vrastani mayraqaxaqy']
answer_arr = [ 'pashinyan', 'erevan','vrastan','tbilisi'] 

index = random.randint(0, len(question_arr))

answer_len=len(answer_arr[index])
answer=answer_arr[index]

question=question_arr[index]
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
