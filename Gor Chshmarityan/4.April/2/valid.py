#!/usr/bin/python3.5

with open('db.py', 'r') as var:
    obj = var.read()
if obj[0] == "{" and obj[-1] == "}":
    temp = obj[1:-2]
elif obj[0] == "{" and obj[-2] == "}":
    temp = obj[1:-3]
temp = temp.split(":")
if temp[0].isdigit() == True:
    print("Valid")
elif temp[0][0] == "\"" and temp[0][-1] == "\"":
    print("Valid")
elif temp[0][0] == "(" and temp[0][-1] == ")":
    try:
        x = eval(temp[0])
        if type(x) == tuple:
            print("Valid")
    except:
        print("NOT VALID")
else:
    print("NOT VALID")


