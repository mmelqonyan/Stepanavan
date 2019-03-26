#!/usr/bin/python3.5
import os
import sys

board = []
horse = u'| \u265E'
Taguhi = '| \u265B'

for i in range(0,8):
    board.append(["|__"]*8)

class Tesq:
    def tesq():
        print("    1   2   3   4   5   6   7   8")
        for i in range(0,8):
            print(i+1,*board[i])
            print()

###########  horse  move  #########################################################
class Horse:

    def hor_variant(i, j, simvol):
       
        if i - 2 >= 0:
            if j - 1 >= 0 and board[i-2][j-1] != Taguhi:
                board[i-2][j-1] = simvol
            if j + 1 <= 7 and board[i-2][j+1] != Taguhi:
                board[i-2][j+1] = simvol
        if i + 2 <= 7:
            if j - 1 >= 0 and board[i+2][j-1] != Taguhi:
                board[i+2][j-1] = simvol
            if j + 1 <= 7 and board[i+2][j+1] != Taguhi:
                board[i+2][j+1] = simvol
        if i + 1 <= 7:
            if j - 2 >= 0 and board[i+1][j-2] != Taguhi:
                board[i+1][j-2] = simvol
            if j + 2 <= 7 and  board[i+1][j+2] != Taguhi:
                board[i+1][j+2] = simvol
        if i - 1 >= 0:
            if j - 2 >= 0 and board[i-1][j-2] != Taguhi:
                board[i-1][j-2] = simvol
            if j + 2 <= 7 and board[i-1][j+2] != Taguhi:
                board[i-1][j+2] = simvol


    def game(get1,get2):

        Horse.hor_variant(get1 - 1, get2 - 1, "\033[93m{}\033[00m" .format('| *'))

        Tesq.tesq()

        set1 = int(input("Select where do you want to go? (row) Horse move "))
        set2 = int(input("Select where do you want to go? (row) Horse move "))
       
        while set1 > 8 or set1 < 0 or set2 > 8 or set2 < 0 or board[set1-1][set2-1] == horse :
            
            set1 = int(input("Select correct index? (row) Horse move "))
            set2 = int(input("Select correct index? (row) Horse move "))

        if (abs(set1 - get1) == 1 and abs(set2 - get2) == 2) or (abs(set1 - get1) == 2 and abs(set2 - get2) == 1):   
            
            if board[set1-1][set2 -1] == Taguhi:
                Horse.hor_variant(get1 - 1, get2 - 1, '|__')
                board[set1-1][set2-1] = horse
                board[get1-1][get2-1] = '|__'
                Tesq.tesq()
                print("Knight win ")
                sys.exit()

            Horse.hor_variant(get1 - 1, get2 - 1, '|__')
            board[set1-1][set2-1] = horse
            board[get1-1][get2-1] = '|__'
            
        else:
            print("\033[93m{}\033[00m" .format("Enter correct index "))
            game(get1, get2)

        print("Exemple : (1-8) Enter")
        Tesq.tesq()
        
        global h_old1
        global h_old2
        h_old1 = set1
        h_old2 = set2
###########  queen move  #########################################################   
class Queen:
    def que_variant(get1, get2,simvol):
    ########## change lines color where queen and horse possition is equal  ##########
        for i in range(8):
            for j in range(8):
                if (j == get2 and i != get1) or (j != get2 and i == get1) or (abs(j - get2) == abs(i - get1)):
                    if board[i][j] != horse and board[i][j] != Taguhi :
                        board[i][j] = simvol

                
    ############## check diaganal and horizonal lines ################################
        for j in range(8):
            if board[get1][j] == horse:
                s = 0
                if j < get2:
                    while s < j:
                        board[get1][s] = '|__'
                        s += 1
                    break
                elif j > get2:
                    s = j + 1
                    while s <= 7:
                        
                        board[get1][s] = '|__'
                        s += 1
                    break

            elif board[j][get2] == horse:
                s = 0
                if j < get1:
                    while s < j:
                        board[s][get2] = '|__'
                        s += 1
                    break 
                elif j > get1:
                    s = j+1
                    while s <= 7:
                        board[s][get2] = '|__'
                        s += 1
                    break
    ######### check Left and Rigth lines ############################################               
        for i in range(8):
            for j in range(8):
                    if board[i][j] == horse:  
                        s = j + 1
                        d = i + 1
                        if i > get1 and j > get2:
                            while s <= 7 and d <= 7:
                                board[d][s] = '|__'
                                s += 1
                                d += 1
                            break
                        elif i < get1 and j < get2:
                            s = j - 1
                            d = i - 1
                            while s >= 0 and d >= 0:
                                board[d][s] = '|__'
                                s -= 1
                                d -= 1
                            break
                        elif i > get1 and j < get2:
                            s = j - 1
                            d = i + 1
                            while s >= 0 and d <= 7:
                                board[d][s] = '|__'
                                s -= 1
                                d += 1
                            break
                        elif i < get1 and j > get2:
                            s = j + 1
                            d = i - 1
                            while s <= 7 and d >= 0:
                                board[d][s] = '|__'
                                s += 1
                                d -= 1
                            break

    def game_mv(get1, get2):

        Queen.que_variant(get1-1, get2-1,"\033[91m{}\033[00m".format('| +'))
        Tesq.tesq()

        set1 = int(input("Select where do you want to go? (row) Queen move "))
        set2 = int(input("Select where do you want to go? (column) Queen move "))

        while set1 > 8 or set1 < 1 or set2 > 8 or set2 < 1 or board[set1-1][set2-1] == Taguhi or board[set1-1][set2-1] == '|__':
            set1 = int(input("Select correct index? (row) Queen move "))
            set2 = int(input("Select correct index? (column) Queen move "))
        
        if (set2 == get2 and set1 != get1) or (set2 != get2 and set1 == get1) or (abs(set2 - get2) == abs(set1 - get1)):
            
            if board[set1-1][set2-1] == horse:
                Queen.que_variant(get1-1, get2-1,'|__')
                board[set1-1][set2-1] = Taguhi
                board[get1-1][get2-1] = '|__'
                Tesq.tesq()
                print("Queen win ")
                sys.exit()   
            board[set1-1][set2-1] = Taguhi
            board[get1-1][get2-1] = '|__'
         
        else:
            print("\033[93m{}\033[00m" .format("Enter correct index "))
            game_mv(get1, get2)
        
        Tesq.tesq()
        Queen.que_variant(get1-1, get2-1,'|__')

        print("Exemple : (1-8) Enter")
        global q_old1
        global q_old2
        q_old1 = set1
        q_old2 = set2
Tesq.tesq()
set1 = int(input("Select cordinate of Forse (row) ")) 
set2 = int(input("Select cordinate of Forse (column) ")) 
board[set1-1][set2-1] = horse
Tesq.tesq()
set3 = int(input("Select cordinate of Queen (row) ")) 
set4 = int(input("Select cordinate of Queen (column) ") )

board[set3-1][set4-1] = Taguhi

i = 0

while True:
    
    if i % 2 == 0:

        Queen.game_mv(set3 ,set4)
        set3 = q_old1
        set4 = q_old2

    else:
       
        Horse.game(set1 ,set2)
        set1 = h_old1
        set2 = h_old2
    print("nobody win")  
    i += 1      
