#!/usr/bin/python3.5

from mario import *


mario = Mario("Mario", 0, 9, "Winchester", 20)
comando = Commando("Comando", 5, 15, "AK", 60, 1)
terminator= Terminator("Terminator", 10, 50, "Grenade launcher", 100, 3)

print("GAME INFO")
print("For shot press 'w'!")
print("For rival shot press 'i'!")
print("For level up Comando press '1'!")
print("For level up Terminator press '1'!")
print("_*"*20)


mario.person()
comando.person()
terminator.person()


mario.shot()
mario.live_down()



