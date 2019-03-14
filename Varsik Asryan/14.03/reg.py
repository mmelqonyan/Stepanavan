#!/usr/bin/python3.5
dict =  { "name":"name", "Surname":"surname", "login":"login", "password":"password" }


print("for sign in input 1     |     for sign up input 2")
Input = input("choose number")
if int(Input) == 1:
    print("sign in")
elif int(Input) == 2:
    print("sign up")
else:
    print("wrong input")
 





def signup ():
    name = input("input your name")
    surname = input("input your surname")
    login = input("input your login")
    password = input("input your password")
    confpasswd = input("input your password")
    dict["name"] = name
    dict["surname"] = surname
    dict["login"] = login
    dict["password"] = password
    print(dict)
    loginpop = input("login")
    password = input("password")
        if dict["login"] == loginpop:
            print("Enter onather login")
        else:
            print("welcome")
        


temp = open('tvyal.json', 'a')
temp.write(str({'name': name, 'surname': surname, 'login': login, 'password': password}))
temp.close()

def signin ():
    login = input("input your login")
    password = input("input your password")
    loginpop = input("login")
    passwpop = input("password")

        if (dict["login"] == loginpop and dict["password"] == passwpop):
            print("welcoime")
        else:
            print("wrong login or password")
    
