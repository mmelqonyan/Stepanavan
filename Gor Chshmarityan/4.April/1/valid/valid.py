#!/usr/bin/python3.5
import json
with open('db.json', 'r') as var:
    obj = var.read()

if obj[0] == '{' and obj[-1:] == '}':
    if obj[1] == "\"":
        for i in range(2,len(obj)):
            if obj[i] == "\"" and obj[i+1] == ":":
                print("Valid")
                exit()
        print("Not valid")
    else:
        print("Not valid")
else:
    print("Not valid")