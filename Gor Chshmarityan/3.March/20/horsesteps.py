#!/usr/bin/python3.5
import os
board = []
symbol = '|__'
for i in range(8):
   board.append([])
   for j in range(8):
       board[i].append(symbol)
horse = '|'"\033[32m{}\033[00m" .format(u'\u265E ')

def game():
    print("First input enter cordinate(1-8) for row, then for column(1-8)")
    row = ["  A"," B"," C"," D"," E"," F"," G"," H"]
    column = 1
    for i in board:
        print(column,*i, sep='', end="|\n")
        column+=1
    print(*row)

def putFigure(x,y):
    board[x-1][y-1] = horse

def putSymbol(x,y):
    board[x-1][y-1] = symbol

def printVariants(i, j, c):
    i = i-1
    j = j-1
    
    if i - 2 >= 0:
        if j - 1 >= 0:
            board[i-2][j-1] = c
        if j + 1 <= 7:
            board[i-2][j+1] = c
    if i + 2 <= 7:
        if j - 1 >= 0:
            board[i+2][j-1] = c
        if j + 1 <= 7:
            board[i+2][j+1] = c
    if i + 1 <= 7:
        if j - 2 >= 0:
            board[i+1][j-2] = c
        if j + 2 <= 7:
            board[i+1][j+2] = c
    if i - 1 >= 0:
        if j - 2 >= 0:
            board[i-1][j-2] = c
        if j + 2 <= 7:
            board[i-1][j+2] = c

def start(temp1: int, temp2: int):
    os.system('clear')
    game()
    row_cor = int(input("Enter cordinate for row(1-8): "))
    col_cor = int(input("Enter cordinate for column(1-8): "))
    
    if (row_cor > 8 or row_cor < 1) or (col_cor < 1 or col_cor > 8):
        start(temp1,temp2)

    if (abs(row_cor - temp1) == 2 and abs(col_cor - temp2) == 1) or (abs(col_cor - temp2) == 2 and abs(row_cor - temp1) == 1):
        printVariants(temp1, temp2, '|__')
        putFigure(row_cor, col_cor)
        
        board[temp1-1][temp2-1] = symbol
        printVariants(row_cor, col_cor, '| #')
        
        start(row_cor, col_cor)
    else:
        start(temp1, temp2)

game()
put1 = int(input("Enter where to put(1-8 for row): "))
put2 = int(input("Enter where to put(1-8 for column): "))
putFigure(put1, put2)
printVariants(put1, put2, '| #')


start(put1, put2)