#!/usr/bin/python3.5
import sys
import math



class add_pop:


	a=[1,2,3]
	def __init__(self,text):
		self.text = text
		

	def add(self):

		
		self.a.append(self.text) 
		return self.a

	def Pop(self):
		
		self.a.pop()
		return self.a


x = add_pop('777')

if __name__ == '__main__':
	print(*x.Pop())
	print(*x.add())
	