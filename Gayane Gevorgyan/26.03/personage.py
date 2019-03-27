#!/usr/bin/python3.5

class Personage:
    def __init__(self, name, live, speed, weapon, ammunation):
        self.name = name
        self.live = live
        self.speed = speed
        self.weapon = weapon
        self.ammunation = ammunation

    def person(self):
        discription = (self.name + " Live: " + str(self.live) + " Speed: " + str(self.speed) + " " +self.weapon + " Ammunation: " + str(self.ammunation))
        print(discription)

    def shot(self):
       
        weapon_a = input("a")
        if weapon_a == "a": 
            self.ammunation-=1
        else:
            print("Press correct botton.")

    def live_down(self):
        vuy = self.speed/self.live
        self.live-=1
        self.speed = vuy*self.speed   
               
        

personage1 = Personage("Commando", 3, 9, "vinchester", 20)
personage2 = Personage("Mario", 5, 15, "AK", 40)

personage1.person()
personage2.person()
personage1.shot()
personage1.live_down()



