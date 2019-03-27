#!/usr/bin/python3.5

class Player:
    def __init__(self):
        self.life = 100
        self.speed = 100
        self.weapon = Weapon()
    
    def shoot_at(self, target):
        self.weapon.shoot()
        target.life -= 10
        target.speed -= 10

class Weapon:
    def __init__(self):
        self.bullet = 30

    def shoot(self):
        print('Shoot')
        self.bullet -= 1
        print('ammo left',self.bullet)

player1 = Player()
player2 = Player()

player1.shoot_at(player2)

while player2.life and player2.speed > 0:

    player1.shoot_at(player2)

print('Player life is ',player2.life)
print('Player speed is ',player2.speed)
print('Player is dead')