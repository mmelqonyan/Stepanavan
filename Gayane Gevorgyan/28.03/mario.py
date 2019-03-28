#!/usr/bin/python3.5

class Mario:
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
       
        weapon_a = input("w")
        if weapon_a == "w": 
            self.ammunation-=1
            print(self.ammunation)
        else:
            print("Press correct botton.")

    def live_down(self):
        injured= input ("i")

        try:
            vuy = self.speed/self.live
        except ZeroDivisionError:
            print("Personage died")

        if injured == "i":
            self.live-=1
            self.speed = vuy*self.speed
            print(self.live)
            print(self.speed)  
        else:
            print("Press correct botton.")

class Commando(Mario):

    def __init__(self, name, live, speed, weapon, ammunation, restore):
        super().__init__(name, live, speed, weapon, ammunation)
        self.restore = restore
        self.restore = 1

    def person(self):
        discription = (self.name + " Live: " + str(self.live) + " Speed: " + str(self.speed) + " " +self.weapon + " Ammunation: " + str(self.ammunation) + " Restore: " + str(self.restore))
        print(discription)

    def live_up(self):
        re = input("1")
        if re == "1":
            self.live+=self.restore
            self.restore=0
            print(self.live)
        else:
            print("Press correct botton.")


class Terminator(Mario):

    def __init__(self, name, live, speed, weapon, ammunation, restore):
        super().__init__(name, live, speed, weapon, ammunation)
        self.restore = restore
        self.restore = 3

    def person(self):
        discription = (self.name + " Live: " + str(self.live) + " Speed: " + str(self.speed) + " " +self.weapon + " Ammunation: " + str(self.ammunation) + " Restore: " + str(self.restore))
        print(discription)

    def live_up(self):       
        re = input("1")
        if re == "1":
            self.live+=self.restore
            self.restore-=1
            print(self.live)
            if self.restore == 0:
                self.live = self.live
        else:
            print("Press correct botton.")
