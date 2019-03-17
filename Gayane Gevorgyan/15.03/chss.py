#!/usr/bin/python3.5
 
def chess_board():
    
    chess=[["wn1","wd1","wp1","wq1","wk1","wp2","wd2","wn2"],
["wz1","wz2","wz3","wz4","wz5","wz6","wz7","wz8"],
["   ","   ","   ","   ","   ","   ","   ","   ","   ",],
["   ","   ","   ","   ","   ","   ","   ","   ","   ",],
["   ","   ","   ","   ","   ","   ","   ","   ","   ",],
["   ","   ","   ","   ","   ","   ","   ","   ","   ",],
["bz1","bz2","bz3","bz4","bz5","bz6","bz7","bz8"],
["bn1","bd1","bp1","bq1","bk1","bp2","bd2","bn2"]]

    vert="|"
    hor="_____"
    n= 5
    while n != 0:
        for i in range (8):
            print("\n"," ",hor*8)
            print(" ",vert,end="")
            for j in range (8):
                print(chess[i][j],vert,end="")
        print("\n"," ",hor*8)
        print("  ","  A ","  B ","  C ","  D ","  E ","  F ","  G ","  H "  )
    

        piece=input("Input piece name: ")
        while piece != chess[i][j]:
            for i in range(8):
                for j in range(8):
                    if piece == chess[i][j]:
                        print("i=",i,"j=",j)
                        chess[i][j]="    "
                        break
            else:
                piece= input("Input the correct name: ")
            break
        i=int(input("Input new i in range 2-5 "))
        j=int(input("Input new j in range 0-7 "))
        chess[i][j]=piece

        for i in range (8):
            print("\n"," ",hor*8)
            print(" ",vert,end="")
            for j in range (8):
                print(chess[i][j],vert,end="")
        print("\n"," ",hor*8)
        print("  ","  A ","  B ","  C ","  D ","  E ","  F ","  G ","  H "  )
        n-=1
chess_board()

