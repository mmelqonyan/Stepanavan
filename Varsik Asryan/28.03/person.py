#!/usr/bin/python3.5

class Person:

    def __init__(self, name, level, gun, speed):    
        
        self.name = name
        self.level = 50
        self.gun = 10
        self.speed = 50

    def show_hero(self):
        try:
            discription = ("Ninza " + "Level is " +str(self.level) +  " Gun is "+ str(self.gun) +" Spped is " +str(self.speed))
        except TypeError:
            print("Try again, pleace")
        else:
            print(discription)
             
        

    def shoot(self):
        self.gun -= 10
        
         

    def injured (self):
        self.level -= 50
        if self.level <20:
            self.speed -=2
        
        
    
nperson = Person("Ninza", 50, 10, 50)


nperson.show_hero()
nperson.shoot()
nperson.injured()


     
