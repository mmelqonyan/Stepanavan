#!/usr/bin/python3.5
import random, os

board_1 = []
board_2 = []
symbol = '|__'
ship = "|X "
checkbox = u"\u2611 "

for i in range(10):
   board_1.append([])
   board_2.append([])
   for j in range(10):
       board_1[i].append(symbol)
       board_2[i].append(symbol)

def put():
    ran = random.randint(0, 9)
    while ran+1 > 9 or ran-1 < 0 or board_1[ran][ran] == ship or board_1[ran][ran+1] == ship:
        ran = random.randint(0, 9)
    board_1[ran][ran] = ship
    board_1[ran][ran+1] = ship    

    ran = random.randint(0, 9)
    while ran+1 > 9 or ran-1 < 0 or ran+2 > 9 or ran-2 < 0 or board_1[ran][ran] == ship or board_1[ran][ran+1] == ship or board_1[ran][ran+2] == ship:
        ran = random.randint(0, 9)
    board_1[ran][ran] = ship
    board_1[ran][ran+1] = ship
    board_1[ran][ran+2] = ship

def desk():
    print("Cordinates(0-9) for row, for column(0-9)")
    row = ["  0"," 1"," 2"," 3"," 4"," 5"," 6"," 7", " 8", " 9"]
    print(*row)
    column = 0
    for i in board_1:
        print(column, *i, sep='', end="|\n")
        column+=1
    print("Cordinates(0-9) for row, for column(0-9)")
    row = ["  0"," 1"," 2"," 3"," 4"," 5"," 6"," 7", " 8", " 9"]
    print(*row)
    column = 0
    for j in board_2:
        print(column, *j, sep='', end="|\n")
        column+=1

def check(counter: int):
    try:    
        while True:
            os.system('clear')
            desk()
            row_cor = int(input("Row(0-9): "))
            col_cor = int(input("Column(0-9): "))
                        
            if counter == 9:
                os.system('clear')
                print("Congratulations you WIN!!!")
                break
            elif board_1[row_cor][col_cor] == ship:
                board_2[row_cor][col_cor] = "|\033[32m{}\033[00m".format(checkbox)
                counter += 1
            else:
                board_2[row_cor][col_cor] = "|\033[31m{}\033[00m".format("X ")
    except(ValueError, IndexError):
        check(counter)

def main():
    try:
        put()
        put()
        check(0)
    except KeyboardInterrupt:
        os.system('clear')
        print("Good Bye!")
main()