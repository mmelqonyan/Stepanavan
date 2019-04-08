#!/usr/bin/python3.5
import os

class Person:
    kyanq = 100
    patron = 50
    speed = 30
   
    def krakel(self, var):
        self.patron -= var
        return self.patron

    def viravorvel(self,var):
        self.kyanq -= var
        if self.kyanq <= 50:
            self.speed -= 2
        return self.kyanq, self.speed

zinvor = Person()
os.system('clear')

while True:
    print("\u2764 ",zinvor.kyanq)
    print(u"\U0001F463 ",zinvor.speed)
    print(u"\U0001F52B ",zinvor.patron)
    choise = int(input("Type 1 for KRAKEL or 2 for viravorvel: "))

    if choise == 1:
        temp = int(input("Enter qani hat krakel: "))
        zinvor.krakel(temp)
        os.system('clear')
    elif choise == 2:
        temp = int(input("Enter qani hat VIRAVORVEL: "))
        zinvor.viravorvel(temp)
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