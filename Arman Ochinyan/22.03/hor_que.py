#!/usr/bin/python3.5
import os
import sys

board= []
horse = u'| \u265E'
Taguhi = '| \u265B'

for i in range(0,8):
    board.append(["|__"]*8)

def tesq():
    print("    1   2   3   4   5   6   7   8")
    for i in range(0,8):
        print(i+1,*board[i])
        print()

###########  horse  move  #########################################################

def game(get1,get2):
    tesq()
    set1 = int(input("Select where do you want to go? (row) Horse move "))
    set2 = int(input("Select where do you want to go? (row) Horse move "))
   
    while set1 > 8 or set1 < 0 or set2 > 8 or set2 < 0 or board[set1-1][set2-1] == horse :
        
        set1 = int(input("Select where do you want to go? (row) Horse move "))
        set2 = int(input("Select where do you want to go? (row) Horse move "))

    if (abs(set1 - get1) == 1 and abs(set2 - get2) == 2) or (abs(set1 - get1) == 2 and abs(set2 - get2) == 1):   
        
        if board[set1-1][set2 -1] == Taguhi:
      
            board[set1-1][set2-1] = horse
            board[get1-1][get2-1] = '|__'
            tesq()
            print("Knight win ")
            sys.exit()

        board[set1-1][set2-1] = horse
        board[get1-1][get2-1] = '|__'
        
    else:
        print("\033[93m{}\033[00m" .format("Enter correct index "))
        game(get1, get2)

    print("Exemple : (1-8) Enter")
    tesq()
    
    global h_old1
    global h_old2
    h_old1 = set1
    h_old2 = set2
###########  queen move  #########################################################   

def game_mv(get1, get2):

    tesq()
    set1 = int(input("Select where do you want to go? (row) Queen move "))
    set2 = int(input("Select where do you want to go? (column) Queen move "))

    while set1 > 8 or set1 < 1 or set2 > 8 or set2 < 1 or board[set1-1][set2-1] == Taguhi:
        set1 = int(input("Select where do you want to go? (row) Queen move "))
        set2 = int(input("Select where do you want to go? (column) Queen move "))
  
    if (set2 == get2 and set1 != get1) or (set2 != get2 and set1 == get1) or (abs(set2 - get2) == abs(set1 - get1)):
        
        if board[set1-1][set2-1] == horse:
   
            board[set1-1][set2-1] = Taguhi
            board[get1-1][get2-1] = '|__'
            tesq()
            print("Queen win ")
            sys.exit()   
        board[set1-1][set2-1] = Taguhi
        board[get1-1][get2-1] = '|__'
     
    else:
        print("\033[93m{}\033[00m" .format("Enter correct index "))
        game_mv(get1, get2)
    
    tesq()
    

    print("Exemple : (1-8) Enter")
    global q_old1
    global q_old2
    q_old1 = set1
    q_old2 = set2

board[1][1] = horse
board[6][6] = Taguhi
set1 = set2 = 2
set3 = set4 = 7
i = 0

while True:
    
    if i % 2 == 0:

        game_mv(set3 ,set4)
        set3 = q_old1
        set4 = q_old2

    else:
      
        game(set1 , set2)
        set1 = h_old1
        set2 = h_old2
    print("nobody win")  
    i += 1      
