#!/usr/bin/python3

import sys

board = []
symbol = '|__'

for i in range(8):
    board.append([])
    for j in range(8):
        board[i].append(symbol)

spitakTaguhi = u'| \u265B'

board[5][5] = spitakTaguhi 
	

def Board():
	c = ['    A ',' B ',' C ',' D ',' E ',' F ',' G ',' H']
	print(*c)
	for x in range(len(board)):
		print(x+1, *board[x])
		print()
Board()

def game_mv():
	get2 = get1 = set2 = set1 = 0

	get_fig = input("Select figure " ).lower()
		

	while len(get_fig) != 2 or not get_fig[1].isdigit() or not get_fig[0].isalpha() or 0 > get1 or get1 > 8 or 1 > get2 or get2 > 8 :
		get_fig = input("Select correct index figure " ).lower()
		get1 = ord(get_fig[0])-97
		get2 = ord(get_fig[1])-48
                                                             
	get1 = ord(get_fig[0])-97
	get2 = ord(get_fig[1])-48

	while board[get2-1][get1] != spitakTaguhi :

		get_fig = input("Select correct index  figure ").lower()
		get1 = ord(get_fig[0])-97
		get2 = ord(get_fig[1])-48

		
	set_fig = input("Select where do you want to go? ").lower()
		
	set1 = ord(set_fig[0])-97
	set2 = ord(set_fig[1])-48

	while len(set_fig) != 2 or not set_fig[1].isdigit() or not set_fig[0].isalpha() or 0 > set1 or set1 > 8 or 1 > set2 or set2 > 8:
		set_fig = input("Select correct index where do you want to go? ").lower()
		set1 = ord(set_fig[0])-97
		set2 = ord(set_fig[1])-48

	board[set2-1][set1] = board[get2-1][get1]
	board[get2-1][get1] = '|__'


	print("Exemple (A2) or (d5)")	
	
	game_mv()

	Board()

game_mv()
