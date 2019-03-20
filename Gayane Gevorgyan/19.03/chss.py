#!/usr/bin/python3.5
 
def chess_board():
    
    chess=[]
    n=5
    vert="|"
    hor="____"
 
    for i in range (8):
        chess.append([])
        for j in range (8):
            field=("  ")
            chess[i].append(field)
        
    print(chess)
    while n != 0:
        for i in range (8):
            print(8-i,"\n"," ",hor*8)
            print(" ",vert,end="")
            for j in range (8):
                print(chess[i][j],vert,end="")
        print("\n"," ",hor*8)
        print("  "," A "," B "," C "," D "," E "," F "," G "," H "  )

#def queen():    
        piece="Q"
        i=int(input("Input i in range 0-7 "))
        j=int(input("Input j in range 0-7 "))
        chess[i][j]=piece

#def position():   
        for i in range (8):
            print(8-i,"\n"," ",hor*8)
            print(" ",vert,end="")
            for j in range (8):
                print(chess[i][j],vert,end="")
        print("\n"," ",hor*8)
        print("  "," A "," B "," C "," D "," E "," F "," G "," H "  )
                
#def new_position():
        new_i=int(input("Input new i in range 0-7 "))
        new_j=int(input("Input new j in range 0-7 "))
        if new_i == i or new_j == j or new_i+new_j == i+j or new_i+new_j-2 == i+j or new_i+new_j+2 == i+j:
            chess[i][j]="  "
            chess[new_i][new_j]=piece
        else:        
            print("Wrong field")
            i=int(input("Input new i in range 0-7 "))
            j=int(input("Input new j in range 0-7 ")) 
        n-=1
chess_board()
queen()
position()
new_position()

