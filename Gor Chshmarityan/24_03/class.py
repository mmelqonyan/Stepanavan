#!/usr/bin/python3.5
import sys
import math

class Array_stack:
    array=[1,2,3,4,5]
    def __init__(self,var):
        self.var = var

    def append(self):
        self.array.append(self.var)
        return self.array

    def delete(self):
        self.array.pop()
        return self.array

def check():
    temp = input("Type **delete** to delete last element from array: ")
    if temp == "delete":
        print(obj.delete())
    else:
        print("Wrong answer.")
        check()

print(Array_stack.array)
temp = input("Enter what you want to add an array: ")
obj = Array_stack(temp)
print(obj.append())
check()
