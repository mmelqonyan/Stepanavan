from constants import SHIP_PART_N, TOP_COORDINATES_TEMPLATE, EMPTY_N, EMPTY_SYMBOL, DAMAGED_SHIP_PART_N, \
    DAMAGED_SHIP_PART_SYMBOL, MISSED_SHOOT_N, MISSED_SHOOT_SYMBOL, HORIZONTAL, VERTICAL, SHIP_PART_SYMBOL, DEAD_SHIP_N, \
    DEAD_SHIP_SYMBOL


class Ship:
    def __init__(self, size, orientation):
        if 0 < size < 5:
            self.size = size
            self.orientation = orientation
            self.ship = [SHIP_PART_N for i in range(self.size)]
            self.coordinates = []
        else:
            raise Exception("Invalid size")

    def damage(self, x, y):
        self.size -= 1

    def is_dead(self):
        return self.size == 0

    def __len__(self):
        return self.size

    def __str__(self):
        ship_s = "["
        for i in range(self.size):
            ship_s += SHIP_PART_SYMBOL
        ship_s += "]"
        return ship_s


class BattleBoard:
    def __init__(self, size):
        self.size = size
        self.board = self.__construct()

    def draw(self, hidden=False):
        index = 0
        print(TOP_COORDINATES_TEMPLATE.format(*[i for i in range(self.size)]))
        for row in self.board:
            print(str(index) + " | " if index < 10 else str(index) + "| ", end="")
            for s in row:
                if s == EMPTY_N:
                    print(EMPTY_SYMBOL, end="")
                elif s == SHIP_PART_N:
                    print(EMPTY_SYMBOL if hidden else SHIP_PART_SYMBOL, end="")
                elif s == DAMAGED_SHIP_PART_N:
                    print(DAMAGED_SHIP_PART_SYMBOL, end="")
                elif s == MISSED_SHOOT_N:
                    print(MISSED_SHOOT_SYMBOL, end="")
                elif s == DEAD_SHIP_N:
                    print(DEAD_SHIP_SYMBOL, end="")
            print()
            index += 1

    def __construct(self):
        return [[EMPTY_N for i in range(self.size)] for j in range(self.size)]

    def set_ship_by_coordinates(self, ship: Ship, x: int, y: int):
        if x < 0 or x > self.size - 1:
            return False
        if ship.orientation is HORIZONTAL:
            if self.check_board_for_coordinates_horizontal(x, y, ship):
                for i in range(len(ship)):
                    self.board[x][y + i] = SHIP_PART_N
                    ship.coordinates.append([x, y + i])
                return True
            else:
                return False
        elif ship.orientation is VERTICAL:
            if self.check_board_for_coordinates_vertical(y, x, ship):
                for i in range(len(ship)):
                    self.board[x + i][y] = SHIP_PART_N
                    ship.coordinates.append([x + i, y])
                return True
            else:
                return False
        else:
            raise Exception("Invalid ship orientation")

    def shoot_by_coordinates(self, x: int, y: int):
        damaged = False
        if self.board[x][y] is SHIP_PART_N:
            self.board[x][y] = DAMAGED_SHIP_PART_N
            damaged = True
        else:
            self.board[x][y] = MISSED_SHOOT_N
        return damaged

    def check_board_for_coordinates_horizontal(self, x, y, ship: Ship):
        try:
            top = 0 if x - 1 < 0 else 1
            bottom = 0 if x + 1 > self.size - 1 else 1
            left = 0 if y - 1 < 0 else 1
            right = 0 if y + len(ship) > self.size - 1 else 1
            for i in range(1 + top + bottom):
                for j in range(len(ship)):
                    if self.board[x - top + i][y + j] is SHIP_PART_N:
                        return False
            for i in range(1 + top + bottom):
                if self.board[x - right - top + bottom + i][y + len(ship) - 1 + right] is SHIP_PART_N \
                        or self.board[x - top + i][y - left] is SHIP_PART_N:
                    return False
        except IndexError:
            return False
        return True

    def check_board_for_coordinates_vertical(self, x, y, ship: Ship):
        try:
            top = 0 if x - 1 < 0 else 1
            bottom = 0 if x + 1 > self.size - 1 else 1
            left = 0 if y - 1 < 0 else 1
            right = 0 if y + len(ship) > self.size - 1 else 1
            for i in range(1 + top + bottom):
                for j in range(len(ship)):
                    if self.board[y + j][x - top + i] is SHIP_PART_N:
                        return False
            for i in range(1 + top + bottom):
                if self.board[y + len(ship) - 1 + right][x - top + i] is SHIP_PART_N \
                        or self.board[y - left][x - top + i] is SHIP_PART_N:
                    return False
        except IndexError:
            return False
        return True


    def set_dead_ship(self, ship: Ship):
        for i, j in ship.coordinates:
            self.board[i][j] = DEAD_SHIP_N
