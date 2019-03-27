#!/usr/bin/python3.5
import random

array=[]                        #create a matrix (10x10) 
for i in range(10):
    array.append([])
for i in range(10):
    for j in range(10):
        array[j].append(random.randint(1,9))
for i in array:
    print(*i,'|', sep='', end='\n')

diag1=[]                  #Generate I diagonal of matrix.
tmp=0 
for i in range(10):
    element_list1=array[tmp][tmp]
    diag1.append(element_list1)
    tmp+=1
print(diag1)

diag2=[]                 #Generate II diagonal of matrix.  
tmp1=0
tmp2=9
for i in range(10):
    element_list2=array[tmp1][tmp2]
    diag2.append(element_list2)
    tmp1+=1
    tmp2-=1
print(diag2)

sum_diagonal_1=sum(diag1) #sum of I diagonal
sum_diagonal_2=sum(diag2) #sum of II diagonal
print(sum_diagonal_1)
print(sum_diagonal_2)
if sum_diagonal_1>sum_diagonal_2:
    print("The first diagonal of the matrix is big")
else:
    print("The second diagonal of the matrix is big")




