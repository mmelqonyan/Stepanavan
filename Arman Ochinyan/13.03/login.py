#!/usr/bin/python3
import random
import os
import json
import sys
import pickle
import sqlite3

connection = sqlite3.connect("register.db")
cursor = connection.cursor()

# delete 
#cursor.execute("""DROP TABLE data1;""")


sql_command = """
CREATE TABLE IF NOT EXISTS data1 ( 
staff_number INTEGER PRIMARY KEY, 
name VARCHAR(30), 
surname VARCHAR(30), 
login VARCHAR(30), 
passwd VARCHAR(30),
id VARCHAR(30));"""

cursor.execute(sql_command)

######### sign up   ##########################
def sign_up():
	
	name = input("Enter your name ")
	while not name:
		name = input("Enter your name ")
	
	surname = input("Enter your surname ")
	while not surname:
		surname = input("Enter your surname ")

	login = input("Enter your login ")

	while not login :
		login = input("Enter your login ")
	
	connection = sqlite3.connect("register.db")
	cursor = connection.cursor()

	cursor.execute("SELECT * FROM data1" )
	cursor.execute("SELECT * FROM data1")

	x = cursor.fetchall() 
	i = 0
	
	while i < len(x):
		if login in x[i]: 
			login = input("Enter another login ")
			i = 0
			continue
		i += 1	

	passwd = input("Enter your password ")
	while len(passwd) < 3:
		passwd = input("Your pass is short Enter password ")

	conf_passwd = input("Confirm your password ")
	while conf_passwd != passwd:
		conf_passwd = input("Confirm your password ")

	
	ID = name + str(random.randint(1000, 1000000))

	cursor.execute('''INSERT INTO data1(staff_number,name, surname, login, passwd,ID)
                  VALUES(NULL,?,?,?,?,?)''', (name,surname, login, passwd,ID))

	connection.commit()

	connection.close()

	print("Hello " ,name )
	print("Your ID (Do not say it to others): " )
	print("Congratulations you create accaunt in Facebook")

############ sign in ##############################################
def signin():

	log_in = input("Enter your login ")
	pass_wd = input("Enter your Password ")

	connection = sqlite3.connect("register.db")
	cursor = connection.cursor()

	cursor.execute("SELECT * FROM data1" )
	cursor.execute("SELECT * FROM data1")
	x = cursor.fetchall() 
	print(x)


	for i in range (0,len(x)):
		if log_in in x[i]: 
			if pass_wd in x[i]:
				print("Hello " ,x[i][1],x[i][2])
				sys.exit()				
		
	print("Incorrect login or password")



categoria=input("Select sign in or sign up ")
if categoria.lower() == 'up' or categoria.lower() == 'signup':
	sign_up()
elif categoria.lower() == 'in' or categoria.lower() == 'signin':
	signin()
else:
	print("Incorrect categoria: Please select sign up or sign in : Try new")
