#!/usr/bin/python3.5

dict1={}
db = open("database.txt", "r")
dict1=eval(db.read())
for j in db:
    print("Type 1 to Sign in. ")
    print("Type 2 to sign up.")
    Input = input("Choose number: ")
    if int(Input) == 1:
        username = input("Input  your username: ")
        password = input("Enter your password: ")
	
        if username in dict1.get("username") and password in dict1.get("password"):
            print("Welcome " + dict1["name"])
            
        else:
            print("Wrong username  or password! Try again: ") 

    elif int(Input) == 2:
        db = open("database.txt", "r+")
        db.write( str(dict1))
        username = input("Input username: ")
        if username not in dict1["username"]:
            password = input("Input password: ")
            dict1["password"] = password
            rep_password = input("Repeat password: ")
            dict1["repeat_password"] = rep_password

            if dict1["password"] == dict1["repeat_password"]:
                name = input("Input your name: ")
                dict1["name"] = name
                surename = input("Enter your surename: ")
                dict1["surename"] = surename
	
                str.append(dict1)
            else:
                print("Reenter password")
        else:
            print ("Wrong username")
    #dict1 = {"username":username,"password":password,"name":name, "surname":surname,"repeat_password":password}
    else:
        print("Error")
db.close()
	
