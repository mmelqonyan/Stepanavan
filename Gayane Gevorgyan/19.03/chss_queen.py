#!/usr/bin/python3.5
 
def chess():
    
    chess=[]
    
    
    for i in range (8):
        chess.append([])
        for j in range (8):
            field=("  ")
            chess[i].append(field)
    number=['8','7','6','5','4','3','2','1']
    letter=['A','B','C','D','E','F','G','H']

    def board():       
        for i in range (8):           
            print("\n"," ","____"*8)
            print(8-i,"|",end="")
            for j in range (8):
                print(chess[i][j],"|",end="")
        print("\n"," ","____"*8)
        print("  "," A "," B "," C "," D "," E "," F "," G "," H "  )        
        chess[i][j]="  "   
      
    board()
    def piece(n):
        input_letter=input("Input letter field for queen : ")
        input_number=input("Input number field for queen : ")
        if input_letter in letter:
            j=int(letter.index(input_letter))          
        else:
            print("You input wrong letter") 
        if input_number in number:
            i=int(number.index(input_number))                      
        else:
            print("You input wrong number")
        chess[i][j]="Q"
        pos1=i
        pos2=j
    
        while n != 0:
            board()
            new_letter=input("Input new letter Q: ")
            new_number=input("Input new number Q: ")
            new_n=int(number.index(new_number))
            new_l=int(letter.index(new_letter))       
            
            if new_n +new_l == pos1+pos2 or new_n +new_l-2 == pos1+pos2 or new_n +new_l+2 == pos1+pos2 or new_n == pos1 or new_l == pos2 or new_n-pos1 == new_l-pos2 or pos1-new_n == pos2-new_l:
                chess[new_n][new_l]="Q"
                chess[pos1][pos2]="  "
                pos1=new_n
                pos2=new_l
            else:        
                print("Wrong field")
            
            n-=1
    piece(15)
chess()
