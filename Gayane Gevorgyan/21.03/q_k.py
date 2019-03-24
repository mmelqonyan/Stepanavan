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

        input_let_k=input("Input letter field for knight : ")
        input_num_k=input("Input number field for knight : ")
        if input_letter in letter:
            j=int(letter.index(input_let_k))          
        else:
            print("You input wrong letter") 
        if input_number in number:
            i=int(number.index(input_num_k))                      
        else:
            print("You input wrong number")
        chess[i][j]="H"
        pos_i=i
        pos_j=j
    
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
            if pos1 == pos_i and pos2 == pos_j:
                chess[pos_i][pos_j]="Q"
                print("   WIN QUEEN!!!")
                break

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
            if pos1 == pos_i and pos2 == pos_j:
                chess[pos1][pos1]="H"
                print("\n   WIN KNIGHT!!!")
                break
            
            n-=1
    piece(5)
chess()
