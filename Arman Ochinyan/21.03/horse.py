#!/usr/bin/python3.5
import os
import sys

board= []
s = u'| \u265E'

for i in range(0,8):
    board.append(["|__"]*8)

def tesq():
    print("    1   2   3   4   5   6   7   8")
    for i in range(0,8):
        print(i+1,*board[i])
        print()

get1 = 6
get2 = 5

def variant(i, j, simvol):

   if i - 2 >= 0:
       if j - 1 >= 0:
           board[i-2][j-1] = simvol
       if j + 1 <= 7:
           board[i-2][j+1] = simvol
   if i + 2 <= 7:
       if j - 1 >= 0:
           board[i+2][j-1] = simvol
       if j + 1 <= 7:
           board[i+2][j+1] = simvol
   if i + 1 <= 7:
       if j - 2 >= 0:
           board[i+1][j-2] = simvol
       if j + 2 <= 7:
           board[i+1][j+2] = simvol
   if i - 1 >= 0:
       if j - 2 >= 0:
           board[i-1][j-2] = simvol
       if j + 2 <= 7:
           board[i-1][j+2] = simvol

def game(get1,get2):

	variant(get1 - 1, get2 - 1, "\033[93m{}\033[00m" .format('| *'))
	
	tesq()
	set1 = int(input("Enter row index "))
	set2 = int(input("Enter column index "))
   
	if set1 > 8 or set1 < 0 or set2 > 8 or set2 < 0:
        
		game(get1, get2)

	if (abs(set1 - get1) == 1 and abs(set2 - get2) == 2) or (abs(set1 - get1) == 2 and abs(set2 - get2) == 1):
		variant(get1-1, get2-1,'|__')	
		board[set1-1][set2-1] = s
		tesq()
		game(set1,set2)

	else:
		print("Enter correct index ")
		game(get1,get2)
    
board[get1 - 1][get2-1] = s

game(get1,get2)