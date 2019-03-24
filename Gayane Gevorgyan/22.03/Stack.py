#!/usr/bin/python

class Stack:
    def __init__(self):
        self.stack = []

    def isEmpty(self):
        return self.stack == []

    def append(self,stck):
        self.stack.append(stck)    

    def pop(self):
        return self.stack.pop()
   
   
stc = Stack()
stc.append("ay")
stc.append(44)
print(stc)
print(stc.append)




