#!/usr/bin/python3.5
import os
import random
board = []
x = int(input("Enter size of 2Хarray: "))

def twoXarray():
    for i in range(x):
        board.append([])
        for j in range(x):
            board[i].append(random.randint(1,9))

def game():
    for i in board:
        print(*i, sep=' | ',  end="\n")

def firstCorner():
    sumOfFirstCorner = 0
    for i in range(x):
        for j in range(x):
            if i == j:
                sumOfFirstCorner += board[i][j]
    return sumOfFirstCorner              

def secondCorner():
    sumOfSecondCorner = 0
    temp = x - 1
    for i in range(x):
        for j in range(x):
            if j == temp:
                sumOfSecondCorner += board[i][j]
                temp-=1
    return sumOfSecondCorner

def check():
    if firstCorner() > secondCorner():
        print("Sum of first corner: "+str(firstCorner()))
        print("Sum of second corner: "+str(secondCorner()))

        print("The greater number is: "+str(firstCorner()))
    elif firstCorner() == secondCorner():
        print("Sum of first corner: "+str(firstCorner()))
        print("Sum of second corner: "+str(secondCorner()))
        print("The sum of corners is exactly same: "+str(firstCorner())+' = '+str(secondCorner()))
    else:
        print("Sum of first corner: "+str(firstCorner()))
        print("Sum of second corner: "+str(secondCorner()))
        
        print("The greater number is: "+str(secondCorner()))

def main():
    twoXarray()
    game()
    firstCorner()
    secondCorner()
    check()

main()