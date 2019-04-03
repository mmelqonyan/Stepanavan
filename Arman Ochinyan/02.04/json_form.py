#!/usr/bin/python3.5
import re
import ast
import sys
with open("db.py",'r') as js_text:

	str_text = js_text.read()

str_text = str_text.replace(" ", "")
str_text = str_text.replace("\n", "")
if str_text[0] != '{' or str_text[len(str_text)-1] !='}':
	print("Invalid j JSON")
	sys.exit()
temp = str_text[1:-1]

def check_sim(sim1,sim2,text):
	if text[0] == sim1 and text[len(text)-1] == sim2 and sim1 == '(' and sim2 == ')':
		
		return True
	elif text[0] == sim1 and text[len(text)-1] == sim2 and sim1 == '"' and sim2 == '"':
		
		return True
	elif text[0] == sim1 and text[len(text)-1] == sim2 and sim1 == '{' and sim2 == '}':
		
		return True
	return False

i = 2


def univers_check(key,val):
	a = False
	#print(a,key.isdigit())
	if key.isdigit():
		
		if check_sim('"','"',val):
			a = True
		elif val.isdigit():
			a = True
		elif check_sim('(',')',val):
			a = True
		elif check_sim('{','}',val):
			a = True
		
	else:

		if key[0] == '"' and key[-1] == '"':
			
			if check_sim('"','"',val):
				a = True
			elif val.isdigit():
				a = True
			elif check_sim('(',')',val):
				a = True
			elif check_sim('{','}',val):
				a = True
			
	return a	

def splt(temp1):
	if ',' not in temp1:
		key,simv,val = temp1.partition(':')
		x = univers_check(key,val)
		if x:
			print("Valid ")	
		else:
			print("Invalid")
		return
	elif ',' in temp1:
		
		key,simv,val = temp1.partition(',')
		
		key,simv,val1 = key.partition(':')

		x = univers_check(key,val1)
		
		#print(val)
		
	if x:
		splt(val)	
	else:
		print("Invalid")
	
splt(temp)		