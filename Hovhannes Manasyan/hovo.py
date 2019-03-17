#!/usr/bin/python3.5
from ast import literal_eval

print("1 to Sign in. ")
print("2 to sign up.")
select = input("What do you want: ")

if '1' in select:

    login = input("Enter your login: ")
    password = input("Enter your password: ")
            
    array = []
    with open('db.txt') as f:
        for line in f:
            array.append(line)
        for i in range(len(array)):
            temp = literal_eval(array[i])
            if login in temp["login"] and password in temp["password"]:
                print("Welcome! "+temp["name"])
                exit()
        
    print("Wrong login or password. Try again.")
   

elif '2' in select:

    login_ = input("Enter login: ")
    password_ = input("Enter password: ")
    name_ = input("Enter name: ")
    array_tmp = []
    with open("db.txt") as f:
        for line in f:
            array_tmp.append(line)
        for i in range(len(array_tmp)):
            if login_ in array_tmp[i]:
                print("This login is already exist.")
                exit()            
        with open("db.txt", 'a') as f:
            f.write(str({'login': login_, 'password': password_, 'name': name_ }) + '\n')
        print("Succesfully registered.")
        exit()



    
