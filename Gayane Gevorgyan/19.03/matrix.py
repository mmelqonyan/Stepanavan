#!/usr/bin/python3.5

import random
n = "global"
n = int(input("n= "))  

def creatArray():
    array = []  
    for i in range (n):
        array.append([])
        for j in range (n):
            num=random.randint(-10,10)
            array[i].append(num)
        
    print(array)
 
#def diagonal1():
    sum_diag1=0
    for i in range(n):
        j=i
        sum_diag1=sum_diag1+array[i][j]
    print(sum_diag1)

#def diagonal2():
    sum_diag2=0
    for i in range(0,n):
        j=n-i-1
        sum_diag2=sum_diag2+array[i][j]
    print(sum_diag2)
   
creatArray()
#diagonal1()
#diagonal2()  
