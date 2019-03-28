#!/usr/bin/python3.5
try:
	import sys
	import math
	import string
	import os
except ImportError:
	print("import error")
	sys.exit()

class person:
    
	def __init__(self,zenq,tariq):
		self.zenq = zenq
		self.kjanq = tariq

	def Krakel(self):
		return 'արագությունը 100,Ունեք՝ %d կյանք,Մնաց` - %d փամփուշտ' %  (self.kjanq,100-self.zenq)

	def Spanel(self):
		aragutyun = 100
		
		if (self.kjanq - (self.zenq // 10)) <= 0:
			return 'արագությունը 0,Դուք Զոհվեցիք'
		
		aragutyun = aragutyun-((self.zenq // 10)*10)
		return 'արագությունը %d,Մնաց` %d Կյանք' % (aragutyun,self.kjanq - (self.zenq // 10) )

class child(person):

	def __init__(self,anun,zenq,tariq):
		super(). __init__(zenq,tariq)
		self.anun = anun

	def Spanel(self):
		return self.anun+': ձեր ' + person.Spanel(self)

	def Krakel(self):
		return self.anun+': ձեր ' + person.Krakel(self)

print("Կյանքը 10 Փամփուշտների առավելագույն թիվ 100  ")
try:
	
	anun = input("Մուտքագրեք ձեր անունը ")
	while not anun:
		anun = input("Մուտքագրեք ձեր անունը ")
	try:
		tariq = int(input("Մուտքագրեք ձեր տարիքը "))
	except ValueError:
		print("ValueError")
		sys.exit()
	except Exception:
		print("Error")
	try:
		if tariq < 18:
			print("Դուք չափահաս չեք հաջողություն")
			sys.exit()
	except NameError:
		print("NameError")

	try:
		check = int(input("Կրակել(1),թե պաշտպանվել(2) "))
	except Exception:
		print("ValueError")
		sys.exit()
	try:
		if check == 1:
			try:
				patron = int(input("Որքան անգամ կրակել "))
			except Exception:
				print("ValueError")
				sys.exit()
			while patron > 100:
				patron = int(input("Մուտքագրեք 100 ից փոքր թիվ "))
			krakel = child(anun,patron,tariq)
			try:
				print(krakel.Krakel())
			except AttributeError:
				print("AttributeError")
		elif check == 2:

			try:
				patron = int(input("Որքան անգամ կրակել "))
			except Exception:
				print("ValueError")
				sys.exit()
			spanel = child(anun,patron,tariq)
			try:
				print(spanel.Spanel())
			except AttributeError:
				print("AttributeError")
		else:
			print("Կրկնեք նորից")
	except NameError:
		print("Name Error")
except KeyboardInterrupt:
	print("\nKeyboardInterrupt Error")