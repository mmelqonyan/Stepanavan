#!/usr/bin/python3.5
import sys
import math

class add_pop:

	a=[1,2,3]
	
	def add(self,text):
		self.a.append(text) 
		return self.a

	def Pop(self):
		
		self.a.pop()
		return self.a

print("array - ", *add_pop.a)

if __name__ == '__main__':

		
	check = input("Append(1) or Pop(2) ")
	if check == '1':

		text = input("Enter text for append ")
		x = add_pop()		
		print("array - ", x.add(text))
					
	elif check > '0':
		x = add_pop()
		print("array - ", *x.Pop())
		

	
