#!/usr/bin/python3.5
 
def battleship():
    
    ship=[]
        
    for i in range (10):
        ship.append([])
        for j in range (20):
            if (i==0 and j==1) or (i==0 and j==2) or (i==1 and (j==4 or j==5 or j==6 or j==7 or j==9)) or (i==4 and (j==0 or j==6 or j==7 or j==8)) or (i==5 and (j==0 or j==3)) or (i==6 and (j==0 or j==5 or j==6)) or (i==7 and j==8) or (i==8 and j==5) or (i==9 and (j==5 or j==9)):
                field=(" \u25A0")
            else:
                field=(" \u25A1")
            ship[i].append(field)
    number=['0','1','2','3','4','5','6','7','8','9']
    letter=['a','b','c','d','e','f','g','h','i','j']

    def grid(): 
      
       for i in range (10):           
           print(i,end="")           
           for j in range (20):
               print(ship[i][j],end="")
               if j==9:
                   print("   ", i, end="")                         
           print("   ")
        
       print(" ","a","b","c","d","e","f","g","h",'i','j',"    ", "a","b","c","d","e","f","g","h",'i','j')        
         
    def game(n):
        count=0
        while count != 20:
            grid()
            input_let=input("Input coordinat letter : ")
            input_num=input("Input coordinat number : ")
            if input_let in letter:
                j=int(letter.index(input_let))          
            else:
                print("You input wrong letter") 
            if input_num in number:
                i=int(number.index(input_num))                      
            else:
                print("You input wrong number")
            ship[i][j+10]=" \u2680"
            rec=" \u25A0"
            
            if ship[i][j] == " \u25A0":
                ship[i][j]= " \u2612"
                ship[i][j+10]= " \u2612"
                count+=1            
        print("  YOU  WIN!!!")
            
        n-=1
    game(64)
battleship()

      

                
    


