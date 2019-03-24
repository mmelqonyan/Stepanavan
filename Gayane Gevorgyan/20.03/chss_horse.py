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
        input_let_k=input("Input letter field for knight : ")
        input_num_k=input("Input number field for knight : ")
        if input_let_k in letter:
            j=int(letter.index(input_let_k))          
        else:
            print("You input wrong letter") 
        if input_num_k in number:
            i=int(number.index(input_num_k))                      
        else:
            print("You input wrong number")
        chess[i][j]="H"
        pos_i=i
        pos_j=j
    
        while n != 0:
            board()
            new_let_k=input("Input new letter H: ")
            new_num_k=input("Input new number H: ")
            new_ik=int(number.index(new_num_k))
            new_jk=int(letter.index(new_let_k))
            
            if new_ik +new_jk == pos_i+pos_j+3 or new_ik +new_jk == pos_i+pos_j-3 or new_ik +new_jk == pos_i+pos_j+1 or new_ik+new_jk == pos_i+pos_j-1:
                chess[new_ik][new_jk]="H"
                chess[pos_i][pos_j]="  "
                pos_i=new_ik
                pos_j=new_jk
            
            else:        
                print("Wrong field")
         
            n-=1
    piece(5)
chess()
