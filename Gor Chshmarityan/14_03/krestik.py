#!/usr/bin/python3.5
import os
import sys

os.system('clear')
arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

def area():
    print("Example:")
    print("7 | 8 | 9")
    print("__|___|__")
    print("4 | 5 | 6")
    print("__|___|__")
    print("1 | 2 | 3")
    print("  |   |  \n")
    print("GOOD LUCK!:")

    print(arr[6]+' | '+arr[7]+' | '+arr[8])
    print("__|___|___")

    print(arr[3]+' | '+arr[4]+' | '+arr[5])
    print("__|___|___")
    print(arr[0]+' | '+arr[1]+' | '+arr[2])
    print("  |   |   ")



def condition():

    if arr[0] == arr[1] and arr[1] == arr[2]:
        print("Congratulations "+arr[0]+ " won!")
        sys.exit()
    elif arr[3] == arr[4] and arr[4] == arr[5]:
        print("Congratulations "+arr[3] +" won!")
        sys.exit()
    elif arr[6] == arr[7] and arr[7] == arr[8]:
        print("Congratulations "+arr[6] +" won!")
        sys.exit()
    elif arr[0] == arr[3] and arr[3] == arr[6]:
        print("Congratulations "+arr[0] +" won!")
        sys.exit()
    elif arr[1] == arr[4] and arr[4] == arr[7]:
        print("Congratulations "+arr[1] +" won!")
        sys.exit()
    elif arr[2] == arr[5] and arr[5] == arr[8]:
        print("Congratulations "+arr[2]+ " won!")
        sys.exit()
    elif arr[0] == arr[4] and arr[4] == arr[8]:
        print("Congratulations "+arr[0]+ " won!")
        sys.exit()
    elif arr[2] == arr[4] and arr[4] == arr[6]:
        print("Congratulations "+arr[2]+ " won!")
        sys.exit()

area()

def main():
    for i in range (0,9):
        if i%2 == 0:
            print("Player 1: ")
        else:
            print("Player 2: ")
        rep = int(input("Enter symbol: "))    
        os.system('clear')
        while rep < 1 or rep > 9 or arr[rep-1] == 'X' or arr[rep-1] == 'O':
            area()
            rep = int(input("WARNING!!! Enter correct symbol: "))
            os.system('clear')

         
        if i%2 == 0:
            arr[rep-1]='X'
        else:
            arr[rep-1]='O'
        area()
        condition()            
main()
print("No winner.")
