#!/usr/bin/python3.5

database = open("database.py", "r+")
print(arr_dict[1])
print("Type 1 to Sign in. ")
print("Type 2 to sign up.")
Input = input("Choose number: ")
if int(Input) == 1:
	username = input("Input  your username: ")
	password = input("Enter your password: ")
	if username in database.arr_dict[new_user[username]["username"]] and password in database.arr_dict[new_user[username]["password"]]:
		print("Welcome " + database.arr_dict[new_user[username]["name"]])

       	else:
       		print("Wrong username  or password! Try again: ") 
         
elif int(Input) == 2:

	username = input("Input username: ")
	database.arr_dect[new_user[username]] = {}

	if username != database.arr_dict[new_user[username]["username"]]:
		new_user[username]["password"] = input("Input password: ")
		new_user[username]["repeat_password"] = input("Repeat password: ")

		if new_user[username]["password"] == new_user[username]["repeat_password"]:
			new_user[username]["name"] = input("Input your name: ")
			new_user[username]["surename"] = input("Enter your surename: ")
			database.arr_dict.append(new_user[username])
		else:
			print("Reenter password")
	else:
             print ("Wrong username")      
         
       

else:
    print("Error")
	
