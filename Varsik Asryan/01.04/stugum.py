#!/usr/bin/python3.5
import json

with open('cuc.json','r') as temp:
    obj = temp.read()
if obj[0] == '{'and obj[-1:] == '}':
     
    if obj[1] =="\"":
        i = 2
            
        for i in range(len(obj)):
            if obj[i] == "\"":
                if obj[i+1] == ":":
                    print("Valid")
                    exit()
        print("not valid")
    else:
        print("Not valid")
else:
    print("Not valid")

           


