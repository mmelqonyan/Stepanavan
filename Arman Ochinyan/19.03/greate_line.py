#!/usr/bin/python3
import sys
import random



from random import shuffle
board = []

sum1 = 0
sum2 = 0

for i in range(0,10):
	board.append([])
	for x in range(0,10):
		board[i].append(random.randint(10,99) )
	
	sum2 += board[i][x-i]
	sum1 += board[i][i]
	board[i][x-i] = "\033[93m{}\033[00m" .format( board[i][x-i])
	board[i][i] = "\033[91m{}\033[00m" .format(board[i][i])
for x in range(0,10):
	print( *board[x],sep="  ")

print( "\033[93m{}\033[00m" .format("sum2") ,"\033[91m{}\033[00m".format("sum1") )
print( "\033[93m{}\033[00m" .format(sum2) ,"\033[91m{}\033[00m".format(sum1) )

if sum1 > sum2:
	 print("\033[91m{}\033[00m".format("sum2 < sum1 : Is Greater red line "))
elif sum1 < sum2:
	 print( "\033[93m{}\033[00m" .format("sum2 > sum1 : Is Greater yellow line"))
else:
	 print("\033[96m{}\033[00m" .format("sum2 == sum1 : Is Equal"))