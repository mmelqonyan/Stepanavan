#!/usr/bin/python3.5

#The program till works only for the black Soldiers
import os

board = []
symbol = '|__'
for i in range(8):
    board.append([])
    for j in range(8):
        board[i].append(symbol)
        # symbol+=1
os.system('clear')
print("Instructions. Type number for row and letter for column to get the figure and type same where you want to put it.")

spitakZinvor = u'|\u265F '
spitakNavak = u'|\u265C '
spitakDzi = u'|\u265E '
spitakOficer = u'|\u265D '
spitakTaguhi = u'|\u265B '
spitakTagavor = u'|\u265A '

sevZinvor = u'|\u2659 '
sevNavak = u'|\u2656 '
sevDzi = u'|\u2658 '
sevOficer = u'|\u2657 '
sevTaguhi = u'|\u2655 '
sevTagavor = u'|\u2654 '

def figures_define():
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
    board[0][4] = spitakTaguhi 

    board[7][0] = sevNavak
    board[7][7] = sevNavak 
    board[7][1] = sevDzi
    board[7][6] = sevDzi
    board[7][2] = sevOficer 
    board[7][5] = sevOficer
    board[7][3] = sevTaguhi 
    board[7][4] = sevTagavor 

def game():
    print("For example:  to get - b2, and to put -  b4")
    row = ["  A"," B"," C"," D"," E"," F"," G"," H"]
    column = 8
    for i in board:
        print(column,*i, sep='', end="|\n")
        column-=1
    print(*row)
    check()
    


def check():
    get_figure = input("Enter cordinates what figure you want to get: ")
    put_figure = input("Enter cordinates where to put figure: ")
    if get_figure == "a2" and put_figure == "a3":
        board[6][0] = symbol
        board[5][0] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "a2" and put_figure == "a4":
        board[6][0] = symbol
        board[4][0] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "a3" and put_figure == "a4":
        board[5][0] = symbol
        board[4][0] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "b2" and put_figure == "b3":
        board[6][1] = symbol
        board[5][1] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "b2" and put_figure == "b4":
        board[6][1] = symbol
        board[4][1] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "b3" and put_figure == "b4":
        board[5][1] = symbol
        board[4][1] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "c2" and put_figure == "c3":
        board[6][2] = symbol
        board[5][2] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "c2" and put_figure == "c4":
        board[6][2] = symbol
        board[4][2] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "c3" and put_figure == "c4":
        board[5][2] = symbol
        board[4][2] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "d2" and put_figure == "d3":
        board[6][3] = symbol
        board[5][3] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "d2" and put_figure == "d4":
        board[6][3] = symbol
        board[4][3] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "d3" and put_figure == "d4":
        board[5][3] = symbol
        board[4][3] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "e2" and put_figure == "e3":
        board[6][4] = symbol
        board[5][4] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "e2" and put_figure == "e4":
        board[6][4] = symbol
        board[4][4] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "e3" and put_figure == "e4":
        board[5][4] = symbol
        board[4][4] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "f2" and put_figure == "f3":
        board[6][5] = symbol
        board[5][5] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "f2" and put_figure == "f4":
        board[6][5] = symbol
        board[4][5] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "f3" and put_figure == "f4":
        board[5][5] = symbol
        board[4][5] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "g2" and put_figure == "g3":
        board[6][6] = symbol
        board[5][6] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "g2" and put_figure == "g4":
        board[6][6] = symbol
        board[4][6] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "g3" and put_figure == "g4":
        board[5][6] = symbol
        board[4][6] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "h2" and put_figure == "h3":
        board[6][7] = symbol
        board[5][7] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "h2" and put_figure == "h4":
        board[6][7] = symbol
        board[4][7] = sevZinvor
        os.system('clear')
        game()
        check()
    elif get_figure == "h3" and put_figure == "h4":
        board[5][7] = symbol
        board[4][7] = sevZinvor
        os.system('clear')
        game()
        check()
    


figures_define()
game()
