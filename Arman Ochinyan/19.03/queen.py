#!/usr/bin/python3.5
import sys
import math

board = []
symbol = '|__'

for i in range(8):
    board.append([symbol]*8)
    
c = ['   1 ',' 2 ',' 3 ',' 4 ',' 5 ',' 6 ',' 7 ',' 8']

def Board():
  
  print(*c)
  for x in range(len(board)):
    print(x+1, *board[x])
    print()

spitakTaguhi = u'| '"\033[93m{}\033[00m" .format('\u265B')
get2 = get1 = 5
board[get1-1][get2-1] = spitakTaguhi
Board()
print("Exemple : (1-8) Enter ")

def game_mv(get1, get2):
  
  
  set1 = int(input("Select where do you want to go? (row) "))
  set2 = int(input("Select where do you want to go? (column) "))
  
  while set1 > 8 or set1 < 1 or set2 > 8 or set2 < 1 :
    set1 = int(input("Select where do you want to go? "))
    set2 = int(input("Select where do you want to go? "))
  
  if set2 == get2 and set1 != get1 or set2 != get2 and set1 == get1:
    board[set1-1][set2-1] = spitakTaguhi
    board[get1-1][get2-1] = '|__'
  elif abs(set2 - get2) == abs(set1 - get1):
    board[set1-1][set2-1] = spitakTaguhi
    board[get1-1][get2-1] = '|__'
  else:
    print( "\033[93m{}\033[00m" .format("Enter correct index "))
    game_mv(get1,get2)
    

  Board()
  print("Exemple : (1-8) Enter")
  game_mv(set1,set2)
game_mv(get1,get2)