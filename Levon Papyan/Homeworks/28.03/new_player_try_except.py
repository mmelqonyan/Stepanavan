#!/usr/bin/python3.5

class Player:
    def __init__(self, nickname, weapon):
        self.nickname = nickname
        self.life = 100
        self.speed = 100
        self.weapon = AK_47(nickname) if weapon == 1 else Shotgun(nickname)
        self.body = [
            [0, 0, 0, 2, 0, 0, 0],
            [0, 0, 2, 2, 2, 0, 0],
            [0, 0, 0, 2, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 0, 1],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0]
        ]

    def get_life(self):
        return self.life

    def calculate_life(self):
        for i in self.body:
            for j in i:
                if j == 1:
                    self.life += 1

    def shoot_at(self, target, x, y):
        self.weapon.shoot()
        mode = None
        try:
            mode = self.weapon.mode
        except:
            pass
        target.check(x, y, mode )

    def check(self, x, y, mode):
        try:
            for i in range(15 if mode == "automatic" else 1):
                if self.body[x-i][y] == 2:
                    print("Headshot " + self.nickname + " is dead")
                    self.body[x - i][y] = "X"
                    self.life = 0
                    self.print_body()
                    exit(1)
                elif self.body[x-i][y] == 1:
                    print("Perfect shoot " + self.nickname + " is wounded")
                    self.body[x-i][y] = "X"
                else:
                    print("Into milk")
        except:
            print("Into milk")
        self.calculate_life()

    def print_body(self):
        for i in range(len(self.body)):
            print(end="")
            for j in self.body[i]:
                print(j, end='')
            print(end='\n')


class Weapon:
    def __init__(self):
        self.bullet = 30

    def shoot(self):
        print('Shoot')
        self.bullet -= 1


class AK_47(Weapon):
    def __init__(self, owner):
        super().__init__()
        self.mode = "semi_automatic"
        self.owner = owner

    def change_mode(self):
        self.mode = "automatic"
        print(self.owner + " using " + self.mode)

    def shoot(self):
        if self.mode == "semi_automatic":
            self.bullet -= 1
        else:
            self.bullet -= 15
        print(self.owner + ' ammo left', self.bullet)


class Shotgun(Weapon):
    def __init__(self, owner):
        super().__init__()
        self.owner = owner

    def shoot(self):
        print('Shoot')
        self.bullet -= 5
        print(self.owner + ' ammo left', self.bullet)

def init_player(n):
    player_name = input("Enter " + str(n) + " player name ")
    while player_name is None:
        player_name = input("Enter " + str(n) + " player name ")
    player_weapon = 0
    while player_weapon > 2 or player_weapon < 1 or player_weapon is None:
        try:
            player_weapon = int(input("Enter " + str(n) + " player weapon \n1) AK 47 \n2) Shotgun "))
        except Exception:
            continue
    return player_name, player_weapon


player1_name, player1_weapon = init_player(1)
player2_name, player2_weapon = init_player(2)

player1 = Player(player1_name, player1_weapon)
player2 = Player(player2_name, player2_weapon)


def _input(player):
    while True:
        try:
            x = int(input("{} player shooting enter coordinate x ".format(player)))
            y = int(input("{} player shooting enter coordinate y ".format(player)))
            break
        except Exception:
            continue
    return x, y


current_player = player1_name
print("GAME IS STARTED")
while True:
    if current_player == player1_name:
        print(current_player)
        player1.print_body()
        x, y = _input(current_player)
        player1.shoot_at(player2, x, y)
        current_player = player2_name
        if player2.get_life() == 0:
            print(current_player + " WIN")
            print(player1_name + " body")
            player1.print_body()
            exit(1)
    if current_player == player2_name:
        print(current_player)
        player2.print_body()
        x, y = _input(current_player)
        player2.shoot_at(player1, x, y)
        current_player = player1_name
        if player1.get_life() == 0:
            print(current_player + " WIN")
            print(player1_name+" body")
            player1.print_body()
            exit(1)
