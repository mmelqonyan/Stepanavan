#!/usr/bin/python3.5
import re
import ast
import sys
with open("db.json",'r') as js_text:

	str_text = js_text.read().replace(" ", "")
	
def chech_count():
	if str_text[0] != '{' or str_text[len(str_text)-1] !='}':
		print("Invalid JSON")
		sys.exit()
	i = 0
	while i < (len(str_text)):
		if str_text[i] == ':':
			count = str_text[:i].count('"')
			if count%2 != 0 :
				print("Invalid JSON")
				sys.exit()

		i += 1
chech_count()
def check_sim(sim,sim2):
	check = check1 = 0
	for x in range(len(str_text)):
		if (str_text[x] == sim ) :
			check += 1
		elif(str_text[x] == sim2 ):
			check1 += 1
	if check != check1 :
		print("Invalid JSON")
		sys.exit()
	return check*2

a = check_sim('{','}')

check1 = sum(1 for x in str_text if x == '"' )
check2 = sum(1 for x in str_text if x == ':' )


if check1 % 2 == 0:
	
	if a/check2 == 2:
		print("Valid JSON")
	else:
		print("Invalid JSON")
else:
	print("Invalid JSON")