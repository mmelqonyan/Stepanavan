#!/usr/bin/python3.5
import os

class Person:

   kyanq = 100
   patron = 50
   speed = 30

   def krakel(self,var):
       
        self.patron -= var
        try:
            return self.patro
        except AttributeError:
            return self.patro
        finally:
            return self.patron
   
   def viravorvel(self,var):
        try:
            self.kyanq -= va
        except NameError:
            self.kyanq -= var
        if self.kyanq <= 50:
            self.speed -= 5
        return self.kyanq, self.speed


class child(Person):

    def  __init__(self,anun,azganun,var):
        Person. __init__(self)
        self.anun = anun
        self.azganun = azganun
        self.var = var
    def krakel(self):
        return Person.krakel(self,self.var)
    def viravorvel(self):
        return Person.viravorvel(self,self.var)

try:
    zinvor = Person()
    os.system('clear')
    name = input("Enter your name: ")
    surname = input("Enter your surname: ")

    while True:
        print(name,surname," - You have a:")
        print("\u2764 ",zinvor.kyanq,'Life')
        print(u"\U0001F463 ",zinvor.speed,'Speed')
        print(u"\U0001F52B ",zinvor.patron,'Patrons')
        try:
            choise = int(input("Type 1 for KRAKEL or 2 for viravorvel: "))
        except ValueError:
            os.system('clear')
            print("Value Error, please read the instruction, and try again!")
            choise = int(input("Type 1 for KRAKEL or 2 for viravorvel: "))
        if choise == 1:
            try:
                temp = input("Enter qani hat krakel: ")
                zinvor.krakel(temp)
                zin = child(name,surname,temp)
                print(zin.krakel())
                os.system('clear')
            except TypeError:
                zinvor.krakel(int(temp))
                zin = child(name,surname,int(temp))
                print(zin.krakel())
                os.system('clear')
        elif choise == 2:
            try:
                temp = input("Enter qani hat VIRAVORVEL: ")
                zinvor.viravorvel(temp)
                zin = child(name,surname,temp)
                print(zin.viravorvel())
                os.system('clear')
            except TypeError:
                zinvor.viravorvel(int(temp))
                zin = child(name,surname,int(temp))
                print(zin.viravorvel())
                os.system('clear')
        else:
            print("Wrong choise!!! Try again")
            os.system('clear')
        if zinvor.kyanq <= 0:
            print("You lose, you haven't any health.")
            break
        elif zinvor.patron <= 0:
            print("You lose, you haven't any patrones.")
            break
except KeyboardInterrupt:
    os.system('clear')
    print("Thank you for playing, GOOD BYE!")

