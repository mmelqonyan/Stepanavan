#!/usr/bin/python3.5
import os
import sys
import random
'''
	Pleace resize your terminal sides
'''
board = []
board2 = []

for i in range(0,10):
	board.append(["|__"]*10)

for i in range(0,10):
	board2.append(["|__"]*10)

def tesq(bo):
	print(" 1  2  3  4  5  6  7  8  9  10")
	for i in range(0,10):
		print(*bo[i],i+1,sep='')

navak = u"|\U0001F6E5 "
def boat():

	pos = random.randint(0, 9)
	j = random.randint(0,1)
	i = abs(j - 1)
	while pos-1 < 0 or pos+1 > 9 or board[pos][pos] == navak or board[pos-1][pos] == navak or board[pos][pos+1] == navak or \
			 board[pos][pos-1] == navak or board[pos+1][pos] == navak :
		pos = random.randint(0, 9)
	board[pos-i][pos-j] = navak	
	board[pos][pos] = navak
	board[pos+i][pos+j] = navak	

	pos = random.randint(0, 9)
	j = random.randint(0,1)
	i = abs(j - 1)
	while pos-1 < 0 or pos+1 > 9 or board[pos][pos] == navak or board[pos-1][pos]==navak or board[pos][pos-1]==navak:
		pos = random.randint(0, 9)
	board[pos-i][pos-j]=navak	
	board[pos][pos]=navak

	pos = random.randint(0, 9)
	j = random.randint(0,1)
	i = abs(j - 1)
	while pos-1 < 0 or pos+1 > 9 or pos+2 > 9 or board[pos][pos] == navak or board[pos-1][pos] == navak or board[pos][pos+1] == navak or board[pos][pos+2] == navak or \
			 board[pos][pos-1] == navak or board[pos+1][pos] == navak or board[pos+2][pos] == navak:
		pos = random.randint(0, 9)
	board[pos-i][pos-j] = navak	
	board[pos][pos] = navak
	board[pos+i][pos+j] = navak	
	if j == 1:
		board[pos+i][pos+j+1] = navak
	else:
		board[pos+i+1][pos+j] = navak

boat()

tesq(board)
tesq(board2)

def game():
	
	index1 = index2 = 0
	try:
		index1 = int(input("Enter 1 index of board (1-10) "))
		index2 = int(input("Enter 2 index of board (1-10) "))
		if index1 <= 0 or index1 > 10 or index2 <= 0 or index2 > 10:
			print("Select correct index of board ")
			game()
		if navak in board2[index1 - 1][index2 - 1] or '|O_' in board2[index1 - 1][index2 - 1]:
			print("You already have that index : New Index ")
			game()
	except ValueError:
		print("Select correct index of board")
		game()
	
	if board[index1 - 1][index2 - 1] == navak:
		board2[index1 - 1][index2 - 1] = "\033[93m{}\033[00m".format(navak)

		check = sum(x.count("\033[93m{}\033[00m".format(navak)) for x in board2)
		if check == 10 :
			tesq(board2)
			print("You Win!!!")
			sys.exit()
	else:
		board2[index1 - 1][index2 - 1] = '|O_'
	tesq(board)
	tesq(board2)
	game()

