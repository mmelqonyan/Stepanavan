#!/usr/bin/python3.5

print("Type 1 to Sign in. ")
print("Type 2 to sign up.")
Input = input("Choose number: ")
if int(Input) == 1:
	username = input("Input  your username: ")
	password = input("Enter your password: ")
	db = open("database.txt", "r")
	if username in dict[username] and password in dict[password]:
		print("Welcome " + dict["name"])
		db.close()
	else:
		print("Wrong username  or password! Try again: ") 
		         
elif int(Input) == 2:
	db = open("database.txt", "r+")
	d.write( str(dict))

	username = input("Input username: ")
	if username not in dict["username"]:
		password = input("Input password: ")
		dict["password"] = password
		rep_password = input("Repeat password: ")
		dict["repeat_password"] = rep_password

		if dict["password"] == dict["repeat_password"]:
			name = input("Input your name: ")
			dict["name"] = name
			surename = input("Enter your surename: ")
			dict["surename"] = surename
	
			str.append(dict)
		else:
			print("Reenter password")
	else:
             print ("Wrong username")
	dict = {"username":username,"password":password, "name":name, "surname":surname, "repeat_password":password}
else:
	print("Error")
	
