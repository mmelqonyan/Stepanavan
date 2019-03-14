
#!/usr/bin/python3
import random
import os
import json
import sys

path = os.getcwd()
path += '/db.txt'
f = open(path, 'a+')

def append_record(record):
    with open('db.txt', 'a+') as f:
        json.dump(record, f)
        f.write(os.linesep)

def sign_up():
	user={}
	name = input("Enter your name ")
	while not name:
		name = input("Enter your name ")
	user={'name':name}

	surname = input("Enter your surname ")
	while not surname:
		surname = input("Enter your surname ")

	user['surname'] = surname
	login = input("Enter your login ")
	while not login:
		login = input("Enter your login ")

user['login'] = login

	passwd = input("Enter your password ")
	while not passwd:
		passwd = input("Enter your password ")

	conf_passwd = input("Confirm your password ")
	while not conf_passwd or conf_passwd != passwd:
		conf_passwd = input("Confirm your password ")

	user['passwd'] = passwd
	append_record(user)
	print("Congratulations you create accaunt in Facebook")

def signin():

	with open(path) as fp:
		a={}
		log_in = input("Enter your login ")
		pass_wd = input("Enter your Password ")

		for x in fp:
			a=json.loads(x)
			for log in a.values() :
				if log==log_in :
					for pas in a.values() :
						if pas == pass_wd:
							print("Hello you joined us " , a['name'])
							sys.exit()
				else:
					print("Incorrect Login or Password: Try new!!!")
					sys.exit()


if os.path.getsize(path) == 0:
	print("For start please Sign up")
	sign_up()
	sys.exit()

categoria=input("Select sign in or sign up ")

if categoria.lower() == 'sign up':
	sign_up()
elif categoria.lower() == 'sign in':
	signin()
else:
	print("Incorrect categoria: Please select sign up or sign in : Try new")

f.close() 






