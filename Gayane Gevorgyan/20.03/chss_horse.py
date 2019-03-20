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
            print("\n"," ",hor*8)
            print(8-i,vert,end="")
            for j in range (8):
                print(chess[i][j],vert,end="")
        print("\n"," ",hor*8)
        print("  "," A "," B "," C "," D "," E "," F "," G "," H "  )

#5def horse(): 
        chess[i][j]="  "   
        piece="H"
        i=int(input("Input i in range 0-7 "))
        j=int(input("Input j in range 0-7 "))
        chess[i][j]=piece
        pos1=i
        pos2=j


#def position():   
        for i in range (8):
            print("\n"," ",hor*8)
            print(8-i,vert,end="")
            for j in range (8):   
                print(chess[i][j],vert,end="")
        print("\n"," ",hor*8)
        print("  "," A "," B "," C "," D "," E "," F "," G "," H "  )
                
#def new_position():
        new_i=int(input("Input new i in range 0-7 "))
        new_j=int(input("Input new j in range 0-7 "))
        
        print(pos1,pos2)
        if new_i +new_j == pos1+pos2+3 or new_i +new_j == pos1+pos2-3 or new_i +new_j == pos1+pos2+1 or new_i+new_j == pos1+pos2-1 :
            chess[new_i][new_j]=piece
            chess[pos1][pos2]="  "
            
        else:        
            print("Wrong field")
            

        n-=1
chess_board()
#queen()
#position()
#new_position()
#or (new_j == j) or (new_i+new_j == i+j) or (new_i+new_j-2 == i+j) or (new_i+new_j+2 == i+j)
