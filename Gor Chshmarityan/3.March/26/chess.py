#!/usr/bin/python3.5
import os
board = []
symbol = '|__'
for i in range(8):
   board.append([])
   for j in range(8):
       board[i].append(symbol)
horse = '|\u265E '
taguhi = u'|\u265B '



class Chess:
    
    def desk(self):
        print("First input enter cordinate(1-8) for row, then for column(1-8)")
        row = ["  A"," B"," C"," D"," E"," F"," G"," H"]
        column = 1
        for i in board:
            print(column,*i, sep='', end="|\n")
            column+=1
        print(*row)

    def fight(self):
        os.system('clear')
        self.desk()
        put1 = int(input("Enter where to put(1-8 for row)  QUEEN: "))
        put2 = int(input("Enter where to put(1-8 for column)  QUEEN: "))
        board[put1-1][put2-1] = taguhi
        self.desk()
        temp1 = put1
        temp2 = put2
        os.system('clear')
        self.desk()
        put3 = int(input("Enter where to put(1-8 for row)  KNIGHT: "))
        put4 = int(input("Enter where to put(1-8 for column)  KNIGHT: "))
        board[put3-1][put4-1] = horse
        temp3 = put3
        temp4 = put4
        os.system('clear')
        
        while True:
            self.desk()
            row_queen = int(input("Enter cordinate for row(1-8) QUEEN: "))
            col_queen = int(input("Enter cordinate for column(1-8) QUEEN: "))
            if row_queen < 1 or row_queen > 8 or col_queen < 1 or col_queen > 8:
                os.system('clear')
                print("\033[93m{}\033[00m" .format("Wrong STEP, input numbers must be  in range 1-8,  now KNIGHT's turn."))
            elif (row_queen != temp1 and col_queen == temp2) or (col_queen != temp2 and row_queen == temp1) or abs(row_queen - temp1) == abs(col_queen - temp2):
                if board[row_queen-1][col_queen-1] == horse:
                    board[row_queen-1][col_queen-1] = taguhi
                    board[temp1-1][temp2-1] = symbol
                    os.system('clear')
                    self.desk()
                    print("\033[92m{}\033[00m".format("Queen WON!"))
                    break
                board[row_queen-1][col_queen-1] = taguhi
                board[temp1-1][temp2-1] = symbol
                temp1 = row_queen
                temp2 = col_queen
                os.system('clear')
            else:
                os.system('clear')
                print("\033[93m{}\033[00m" .format("Wrong STEP, now KNIGHT's turn."))

            
            self.desk()
            row_horse = int(input("Enter cordinate for row(1-8) KNIGHT: "))
            col_horse = int(input("Enter cordinate for column(1-8) KNIGHT: "))
            if row_horse < 1 or row_horse > 8 or col_horse < 1 or col_horse > 8:
                os.system('clear')
                print("\033[93m{}\033[00m" .format("Wrong STEP, input numbers must be  in range 1-8,  now QUEENS's turn."))
            elif (abs(row_horse - temp3) == 2 and abs(col_horse - temp4) == 1) or (abs(col_horse - temp4) == 2 and abs(row_horse - temp3) == 1):
                if board[row_horse-1][col_horse-1] == taguhi:
                    board[row_horse-1][col_horse-1] = horse
                    board[temp3-1][temp4-1] = symbol
                    os.system('clear')
                    self.desk()
                    print("\033[92m{}\033[00m".format("Knight WON!"))
                    break
                board[row_horse-1][col_horse-1] = horse
                board[temp3-1][temp4-1] = symbol
                temp3 = row_horse
                temp4 = col_horse
                os.system('clear')
            else:
                os.system('clear')
                print("\033[93m{}\033[00m" .format("Wrong STEP, now QUEEN's turn."))

game = Chess()
game.fight()




