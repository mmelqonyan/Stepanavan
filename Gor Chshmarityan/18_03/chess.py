#!/usr/bin/python3.5
import os
board = []
symbol = '|__'
for i in range(8):
    board.append([])
    for j in range(8):
        board[i].append(symbol)
taguhi = u'|\u265B '

def game():
    print("First input enter cordinate(1-8) for row, then for column(1-8)․")
    row = ["  A"," B"," C"," D"," E"," F"," G"," H"]
    column = 1
    for i in board:
        print(column,*i, sep='', end="|\n")
        column+=1
    print(*row)

def start(temp1: int, temp2: int):
    os.system('clear')
    game()
    row_cordinate = int(input("Enter cordinate for row(1-8): "))
    column_cordinate = int(input("Enter cordinate for column(1-8): "))
    if (row_cordinate > 8 or row_cordinate < 1) or (column_cordinate < 1 or column_cordinate > 8):
        start(temp1,temp2)
    board[temp2-1][temp1-1] = '|__'
    temp2, temp1 = row_cordinate, column_cordinate
    board[row_cordinate-1][column_cordinate-1] = taguhi
    start(temp1, temp2)

start(1, 1)

