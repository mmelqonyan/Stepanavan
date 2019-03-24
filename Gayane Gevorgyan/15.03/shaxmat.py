#!/usr/bin/python3.5

def fields():
    vert="|  "*9
    hor="___"*8
    for i in range(8,0,-1):
        print(" ",hor)
        print(i,vert)
    print(" ",hor)
    print("   A"," B"," C","  D"," E"," F"," G"," H")
fields()





