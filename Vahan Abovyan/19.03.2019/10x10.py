#!/usr/bin/pyuthon3.5


n = int(input('n? '))
l = [[0 for j in range(n)] for i in range(n)]
N = n*n
i = 0
j = 0
k = 1
while k <= N:
    l[i][j] = k
    if i <= j + 1 and i + j < n - 1: 
        j += 1
    elif i < j and i + j >= n-1: 
        i += 1
    elif i >= j and i + j > n-1: 
        j -= 1
    else: 
        i -= 1
    k += 1
 
 
for i in l:
    print("*i, sep= '\t")
