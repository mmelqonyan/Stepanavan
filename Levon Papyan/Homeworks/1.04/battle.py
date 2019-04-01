#!/usr/bin/python3.5
import os
import random

from classes import Ship, BattleBoard
from constants import HORIZONTAL, VERTICAL, LEN_OF_PRINTING, CONGRATULATIONS, BOT_NAME, BOARD_SIZE, FILL_SYMBOL

bots_shoots = []
player_shoots = []

bot_success = None



def main():
    global bot_success
    player_board = BattleBoard(BOARD_SIZE)
    bot_board = BattleBoard(BOARD_SIZE)
    player_ships = generate_ships()
    bot_ships = generate_ships()
    set_ships_randomly(player_board, player_ships)
    set_ships_randomly(bot_board, bot_ships)
    os.system("clear")
    print("".center(LEN_OF_PRINTING, FILL_SYMBOL))
    print(" \n Press any key to start the game".center(LEN_OF_PRINTING, FILL_SYMBOL))
    print("".center(LEN_OF_PRINTING, FILL_SYMBOL))
    print(" Good luck :)".center(LEN_OF_PRINTING, FILL_SYMBOL))
    input()
    while True:
        print("".center(LEN_OF_PRINTING, FILL_SYMBOL))
        print(" YOUR BOARD AND SHIPS".center(LEN_OF_PRINTING, FILL_SYMBOL))
        print("".center(LEN_OF_PRINTING, FILL_SYMBOL))
        player_ships_count = 0
        for i in range(len(player_ships)):
            if not player_ships[i].is_dead():
                player_ships_count += 1
        print(" Your ships count {} ".format(player_ships_count).center(LEN_OF_PRINTING, FILL_SYMBOL))
        print("".center(LEN_OF_PRINTING,FILL_SYMBOL))
        player_board.draw()
        print("".center(LEN_OF_PRINTING, FILL_SYMBOL))
        print(" {}'s BOARD AND SHIPS ".format(BOT_NAME).center(LEN_OF_PRINTING, FILL_SYMBOL))
        bot_ships_count = 0
        for i in range(len(bot_ships)):
            if not bot_ships[i].is_dead():
                bot_ships_count += 1
        print(" {} ships count {} ".format(BOT_NAME, bot_ships_count).center(LEN_OF_PRINTING, FILL_SYMBOL))
        print("".center(LEN_OF_PRINTING, FILL_SYMBOL))
        print("".center(LEN_OF_PRINTING, FILL_SYMBOL))
        bot_board.draw(True)
        player_x, player_y = get_player_correct_shoot_coordinates()
        bot_x, bot_y = get_bot_shoot_coordinates(bot_success)
        print("{} shut at {} {}".format(BOT_NAME, bot_x, bot_y))
        # START SHOOTING
        if bot_board.shoot_by_coordinates(player_x, player_y):
            ship = damage(bot_ships, player_x, player_y)
            print(" {} are on the right way :)".format("You"))
            if ship.is_dead():
                bot_board.set_dead_ship(ship)
        if player_board.shoot_by_coordinates(bot_x, bot_y):
            ship = damage(player_ships, bot_x, bot_y)
            if ship.is_dead():
                player_board.set_dead_ship(ship)
                bot_success = None
            else:
                print(" {} is on the right way :)".format(BOT_NAME))
                bot_success = ship
        if check_winner(bot_ships):
            os.system("clear")
            print(CONGRATULATIONS.format("You"))
            exit(1)
        if check_winner(player_ships):
            os.system("clear")
            print(CONGRATULATIONS.format(BOT_NAME))
            exit(1)



def damage(ships: [Ship], x: int, y: int):
    global bot_success
    for ship in ships:
        if [x, y] in ship.coordinates:
            ship.damage(x, y)
            return ship


def get_player_correct_shoot_coordinates():
    x = None
    y = None
    while True:
        try:
            x = int(input("x: "))
            if x < 0 or x > 9:
                raise Exception
            y = int(input("y: "))
            if x < 0 or x > 9:
                raise Exception
            if [x, y] in player_shoots:
                if input("Are your sure to shoot at already shot coordinates ? y / n").lower() == "y":
                    break
                else:
                    print("Okay you can repeat")
                    continue
            player_shoots.append([x, y])
            break
        except Exception:
            print("Incorrect coordinates please enter valid coordinates , greater or equals 0 and less then 10")
            continue
    return x, y


def get_bot_shoot_coordinates(ship: Ship):
    if ship is not None:
        while True:
            x, y = ship.coordinates[random.randint(0, len(ship.coordinates) - 1)]
            if [x, y] in bots_shoots:
                continue
            else:
                bots_shoots.append([x, y])
                return x, y
    else:
        while True:
            x = random.randint(0, BOARD_SIZE - 1)
            y = random.randint(0, BOARD_SIZE - 1)
            if [x, y] in bots_shoots:
                continue
            else:
                bots_shoots.append([x, y])
                break
    return x, y


def generate_ships():
    ships = []
    for i in range(4):
        ships.append(Ship(1, random.randint(VERTICAL, HORIZONTAL)))
    for i in range(3):
        ships.append(Ship(2, random.randint(VERTICAL, HORIZONTAL)))
    for i in range(2):
        ships.append(Ship(3, random.randint(VERTICAL, HORIZONTAL)))
    ships.append(Ship(4, random.randint(VERTICAL, HORIZONTAL)))
    return ships


def set_ships_randomly(board: BattleBoard, ships: [Ship]):
    index = len(ships)
    while index > 0:
        ship = ships[index - 1]
        x = random.randint(0, BOARD_SIZE - 1)
        y = random.randint(0, BOARD_SIZE - 1)
        if not board.set_ship_by_coordinates(ship, x, y):
            continue
        index -= 1


def check_winner(ships: [Ship]):
    for ship in ships:
        if not ship.is_dead():
            return False
    return True


main()
