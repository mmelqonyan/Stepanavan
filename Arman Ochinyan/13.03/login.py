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
	while not login :
		login = input("Enter your login ")
	chack = 0
	with open(path) as fp:
		for j in fp:
			s=json.loads(j)
			if login == s['login']:
				chack += 1

	while chack > 0:
		an_login = input("Enter another login ")
		if an_login != login:
			login = an_login
			chack = 0
	
	user['login'] = login

	passwd = input("Enter your password ")
	while len(passwd) < 3:
		passwd = input("Your pass is short Enter password ")

	conf_passwd = input("Confirm your password ")
	while conf_passwd != passwd:
		conf_passwd = input("Confirm your password ")

	user['passwd'] = passwd
	name += str(random.randint(1000, 1000000))
	user['ID'] = name
	append_record(user)
	print("Hello " , user['name'] )
	print("Your ID (Do not say it to others): " , name)
	print("Congratulations you create accaunt in Facebook")

def signin():

	with open(path) as fp:

		log_in = input("Enter your login ")
		pass_wd = input("Enter your Password ")

	with open(path) as fp:
		for x in fp:

			a=json.loads(x)
			
			if log_in == a['login']:
					
				if pass_wd == a['passwd']:
					print("Hello you joined us " , a['name'])
					print("Your ID (Do not say it to others): " , a['ID'])
					sys.exit()				

		print("Incorrect Login or Password: Try new!!!")
		sys.exit()
		
if os.path.getsize(path) == 0:
	print("For start please Sign up")
	sign_up()
	sys.exit()
				
categoria=input("Select sign in or sign up ")

if categoria.lower() == 'sign up' or categoria.lower() == 'signup':
	sign_up()
elif categoria.lower() == 'sign in' or categoria.lower() == 'signin':
	signin()
else:
	print("Incorrect categoria: Please select sign up or sign in : Try new")
	
f.close() 


