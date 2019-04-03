#!/usr/bin/python3.5

array=[]
for i in range(10):
	array.append([])
for i in range(10):
	for j in range(10):
		array[i].append(0)
arr=array

def func():
	for i1 in range(10):
		for j1 in range(10):
			if i1==a and j1==b:
				arr[a][b]=1
	return arr

def dasht(arr):
	for i in range(10):		
		for j in range(10):
			if arr[i][j]==1:
				print("|N", end=" ")
			else:
				print("|__",end="")
		print("|")

array1=[]
for i in range(10):
	array1.append([])
for i in range(10):
	for j in range(10):
		array1[i].append(0)
arr1=array1

def kill_input():
	a1=int(input("Gteq navaki tex@ "))
	b1=int(input("Gteq navaki tex@ "))
	for i1 in range(10):
		for j1 in range(10):
			if i1==a1 and j1==b1:
				arr1[a1][b1]=2
	return arr1

def kill_table(arr1,arr):
	for i in range(10):		      
			for j in range(10):
				if arr[i][j]==1 and arr1[i][j]==2:
					print("|0", end=" ")
				elif arr[i][j]==0 and arr1[i][j]==2:
					print("|X", end=" ")
				else:
					print("|__",end="")
			print("|")

for i in range(5):
	a=int(input("Greq navaki 1 kordinat@ "))
	b=int(input("Greq navaki 2 kordinat@ "))
	dasht(func())
for i in range(5):
	kill_table(kill_input(),func())



