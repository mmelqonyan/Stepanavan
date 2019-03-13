#!/usr/bin/python3


board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]

def game_area():
    print("Game area example:")
    print("7 | 8 | 9")
    print("__|___|__")
    print("4 | 5 | 6")
    print("__|___|__")
    print("1 | 2 | 3")
    print("  |   |  \n")
    print("Game area, good luck!:")

    print(board[6] ,' | ',board[7] ,' | ',board[8] )
    print("___|_____|_____")
    print(board[3] ,' | ',board[4] ,' | ',board[5] )
    print("___|_____|_____")
    print(board[0] ,' | ',board[1] ,' | ',board[2] )
    print("   |     |   ")


def game_xo():
	for i in range(0,9):
		game_area()
		if i % 2 == 0:

			index = int(input("Player 1 enter the index "))
			while index > 9 or index < 1 or board[index-1] == 'X' or board[index-1] == '0':
				index = int(input("Enter correct index "))
			board[index-1]='X'
			game_area()
			
		else:
			index = int(input("Player 2 enter the index "))
			while index > 9 or index < 1 :
				index = int(input("Enter correct index "))
			board[index-1]='0'
			game_area()
		if i > 3:
			for x in range(0,3):
				if board[x*3] == board[x*3 + 1] and board[x*3] == board[x*3 + 2] and board[x*3] != '-':
					print("Winner is ", board[x*3])
					return
				if board[x] == board[x+3] and board[x+3] == board[x+6] and board[x] != '-':
					print( "Winner is " ,board[x])
					return
				if board[0] == board[4] and board[4] == board[8] or board[2] == board[4] and board[4] == board[6] and board[4] != '-':
					print("Winner is " , board[4])
					return
	print("No Winner ")
game_xo()