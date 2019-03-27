#!/usr/bin/python3.5
import random, os, sys


class Stack:
    def __init__(self):
        self.data = []
    
    def __iter__(self):
        return self.data.__iter__()

    def __str__(self):
        return str(self.data)

    def pop(self):
        if len(self.data) > 0:
            return self.data.pop()
        else:
            return None
    
    def push(self, el):
        self.data.append(el)
        return self

    def __len__(self):
        return len(self.data)

    def __eq__(self, stack):
        return self.data == stack.data

    def __gt__(self, stack):
        return len(self) > len(stack)

    def __lt__(self, stack):
        return len(self) < len(stack)

    def __add__(self, stack):
        temp = Stack()
        for i in self:
            temp.push(i)
        for i in stack:
            temp.push(i)
        return temp
    

stack = Stack()
stack1 = Stack()

stack.push(10).push(20).push(30)
stack1.push(10).push(20).push(30)

if stack == stack1:
    print("they are equals")

stack.push(10)
stack1.push(20)

x = stack + stack1

def main():
    while True:
        try:
            print("Print print for print, print pop for pop, print something to push, good luck :) otherways if you want to exit print exit")
            value = input("Give me my money: ")
            if value == "print":
                print("\nFull stack: >>>", stack, end="\n\n")
            elif value == "pop":
                print("\nPoped last item: >>>", stack.pop(), end="\n\n")
            elif value == "exit":
                print("\ngoodbye", end="\n\n")
                return
            else:
                if value.strip() is not "":
                    stack.push(value)
                else:
                    print("\nnot good value try again\n", file=sys.stderr)   
        except BaseException:
            print("No No No")
        
main()