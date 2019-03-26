#!/usr/bin/python3.5
import sys
import math
import string
import os

class person:
    
	kjanq = 10

	def Krakel(self):
		
		return 'Արագությունը 100,Մնաց - %d փամփուշտ' %  (100-self.zenq)

	def Spanel(self):
		aragutyun = 100
		if (self.kjanq - (self.zenq // 10)) <= 0:
			return 'Արագությունը 0,Դուք Զոհվեցիք'
		
		aragutyun = aragutyun-((self.zenq // 10)*10)
		return 'Արագությունը %d, մնաց %d Կյանք' % (aragutyun,self.kjanq - (self.zenq // 10) )
print("Կյանքը 10 Փամփուշտների առավելագույն թիվ 100  ")
check = int(input("Կրակել(1),թե պաշտպանվել(2) "))

if check == 1:
	krakel = person()
	patron = int(input("Որքան անգամ կրակել "))
	while patron > 100:
		patron = int(input("Մուտքագրեք 100 ից փոքր թիվ"))
	krakel.zenq = patron
	print(krakel.Krakel())
elif check == 2:

	spanel = person()
	patron = int(input("Որքան անգամ կրակել "))
	spanel.zenq = patron
	print(spanel.Spanel())
else:
	print("Կրկնեք նորից")
