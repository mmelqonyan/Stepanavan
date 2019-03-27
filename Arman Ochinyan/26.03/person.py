#!/usr/bin/python3.5
import sys
import math
import string
import os

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
		person. __init__(self,zenq,tariq)
		self.anun = anun

	def Spanel(self):
		return self.anun+' ձեր ' + person.Spanel(self)

	def Krakel(self):
		return self.anun+' ձեր ' + person.Krakel(self)

print("Կյանքը 10 Փամփուշտների առավելագույն թիվ 100  ")
anun = input("Մուտքագրեք ձեր անունը ")
tariq = int(input("Մուտքագրեք ձեր tariqy "))
if tariq < 18:
	print("Դուք չափահաս չեք հաջողություն")
	sys.exit()
check = int(input("Կրակել(1),թե պաշտպանվել(2) "))

if check == 1:
	
	patron = int(input("Որքան անգամ կրակել "))
	while patron > 100:
		patron = int(input("Մուտքագրեք 100 ից փոքր թիվ "))
	krakel = child(anun,patron,tariq)

	print(krakel.Krakel())
elif check == 2:

	patron = int(input("Որքան անգամ կրակել "))
	spanel = child(anun,patron,tariq)

	print(spanel.Spanel())
else:
	print("Կրկնեք նորից")
