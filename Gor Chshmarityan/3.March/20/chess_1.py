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
    print("First input enter cordinate(1-8) for row, then for column(1-8)")
    row = ["  A"," B"," C"," D"," E"," F"," G"," H"]
    column = 1
    for i in board:
        print(column,*i, sep='', end="|\n")
        column+=1
    print(*row)

def start(temp1: int, temp2: int):
    os.system('clear')
    game()
    row_cor = int(input("Enter cordinate for row(1-8): "))
    col_cor = int(input("Enter cordinate for column(1-8): "))
    if (row_cor > 8 or row_cor < 1) or (col_cor < 1 or col_cor > 8):
        start(temp1,temp2)
    board[temp2-1][temp1-1] = '|__'
    if (row_cor != temp2 and col_cor == temp1) or (col_cor != temp1 and row_cor == temp2):
        board[row_cor-1][col_cor-1] = taguhi
        temp2, temp1 = row_cor, col_cor
    elif abs(row_cor - temp2) == abs(col_cor - temp1):
        board[row_cor-1][col_cor-1] = taguhi
        temp2, temp1 = row_cor, col_cor
    else:
        board[temp2-1][temp1-1] = taguhi
    start(temp1, temp2)

start(1, 1)
