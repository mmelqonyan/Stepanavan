#!/usr/bin/python3.5
from ast import literal_eval
print("Type 1 to Sign in. ")
print("Type 2 to sign up.")
select = input("What do you want: ")
x = 0
y = 0
if '1' in select:
    i = 0   
    while i != 11:
        login = input("Enter your login: ")
        password = input("Enter your password: ")
        
        
        for i in range(0,11):
            file_ = open('db.txt','r')
            temp = file_.readlines()[i]
            ID = literal_eval(temp)  
            if login in ID["login"] and password in ID["password"]:
                print("Welcome ")
                exit()
            else:
                i = i + 1
                 
                file_.close()
    print("Wrong login or password. Try agayn")
elif '2' in select:
    k = 0
    while  k != 11:   
        login_ = input("Enter login: ")
        password_ = input("Enter password: ")
        name_ = input("Enter name: ")
        i = 0
        for i in range(0,11):
            k = k + 1
            file_ = open('db.txt','r')
            temp = file_.readlines()[i]
            ID = literal_eval(temp)
            if login_ == ID["login"]:
                print("This login is already exist.")
                exit()        
            file_.close()
        
        file_ = open('db.txt', 'a')
        file_.write(str({"login": login_, "password": password_, "name": name_ }) + '\n')
        print("Succesfully registered.")
        file_.close()
