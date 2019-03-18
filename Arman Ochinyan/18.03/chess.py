#!/usr/bin/python3

import sys

board = []
symbol = '|__'

for i in range(8):
    board.append([])
    for j in range(8):
        board[i].append(symbol)

spitakZinvor = u'| \u265F'
spitakNavak = u'| \u265C'
spitakDzi = u'| \u265E'
spitakOficer = u'| \u265D'
spitakTaguhi = u'| \u265B'
spitakTagavor = u'| \u265A'

sevZinvor = u'| \u2659'
sevNavak = u'| \u2656'
sevDzi = u'| \u2658'
sevOficer = u'| \u2657'
sevTaguhi = u'| \u2655'
sevTagavor = u'| \u2654'

wh_chk = [spitakZinvor,spitakNavak,spitakDzi,spitakOficer,spitakTaguhi,spitakTagavor ]
bl_chk = [sevZinvor,sevNavak,sevDzi,sevOficer,sevTaguhi,sevTagavor ]

for i in range(8):
	board[1][i] = spitakZinvor 
	board[6][i] = sevZinvor

	board[0][0] = spitakNavak 
	board[0][7] = spitakNavak 
	board[0][1] = spitakDzi 
	board[0][6] = spitakDzi 
	board[0][2] = spitakOficer 
	board[0][5] = spitakOficer 
	board[0][3] = spitakTaguhi 
	board[0][4] = spitakTagavor

	board[7][0] = sevNavak
	board[7][7] = sevNavak 
	board[7][1] = sevDzi
	board[7][6] = sevDzi
	board[7][2] = sevOficer 
	board[7][5] = sevOficer
	board[7][3] = sevTaguhi 
	board[7][4] = sevTagavor 

def Board():
	c = ['    A ',' B ',' C ',' D ',' E ',' F ',' J ',' H']
	print(*c)
	for x in range(len(board)):
		print(x+1, *board[x])
		print()
Board()

class game:
	def __init__(self,fig_color):
		
		self.fig_color = fig_color

	def game_mv(self,arr):

		self.fig_chk = arr
		
		
		get2 = get1 = set2 = set1 = 0

		get_fig = input("Select %s figure " % self.fig_color)
		get1 = ord(get_fig[0])-97
		get2 = ord(get_fig[1])-48

		check = False

		while  0 > get1 or get1 > 8 or 1 > get2 or get2 > 8 or (board[get2-1][get1] == '|__') :

			get_fig = input("Select correct index %s figure " % self.fig_color)
			get1 = ord(get_fig[0])-97
			get2 = ord(get_fig[1])-48


		set_fig = input("Select where do you want to go? ")
		set1 = ord(set_fig[0])-97
		set2 = ord(set_fig[1])-48

		if board[set2-1][set1] in self.fig_chk:
			check = True

		while check or 0 > set1 or set1 > 8 or 1 > set2 or set2 > 8:
			
			set_fig = input("Select correct index where do you want to go? ")
			set1 = ord(set_fig[0])-97
			set2 = ord(set_fig[1])-48

			if board[set2-1][set1] not in self.fig_chk:
				check = False
			
		board[set2-1][set1] = board[get2-1][get1]
		board[get2-1][get1] = '|__'
		
for x in range(1,100):

	if x % 2 == 0:
		w = game('white')
		w.game_mv(wh_chk)
	else:
		b = game('black')
		b.game_mv(bl_chk)

	Board()



