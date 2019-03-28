#!/usr/bin/python3.5

class Person():

    def _init_(self, name, level, gun, speed):    
        
        self.name = name
        self.level = 50
        self.gun = 10
        self.speed = 50
    def show_hero(self):
        discription = (self.name + "Level is" + str(self.level) + "Spped is" + str(self.speed))
        print(discription)
             
        

    def shoot(self):
        self.gun -= 10
        return self.gun
         

    def injured (self):
        self.level -= 50
        if self.life <20:
            self.speed -=2
        return self.life
        return self.speed
    
nperson = Person("Ninza", 50, 10, 50)

nperson.show_hero()
nperson.shoot()
nperson.injured()


     
