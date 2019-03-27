from idna import unichr
import os

BLACK = "black"
WHITE = "white"
PLAYER = WHITE
board = [[], [], [], [], [], [], [], []]
coordinates = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7
}
template = \
    """| {} """
for i in range(8):
    for j in range(8):
        board[i].append(template.format("  "))

whiteFigures = {
    "WQ": u''.join(unichr(9813)),
    "WB": u''.join(unichr(9815)),
    "WKn": u''.join(unichr(9816)),
    "WR": u''.join(unichr(9814)),
    "WK": u''.join(unichr(9812)),
    "WP": u''.join(unichr(9817)),
}
blackFigures = {
    "BK": u''.join(unichr(9818)),
    "BQ": u''.join(unichr(9819)),
    "BB": u''.join(unichr(9821)),
    "BKn": u''.join(unichr(9822)),
    "BR": u''.join(unichr(9820)),
    "BP": u''.join(unichr(9823))
}

symbol_1 = '| '
arr_letter = '    A ' '  B  ' '  C  ' ' D  ' '  E  ' '  F  ' '  G  ' ' H  '


def print_board():
    print(str(arr_letter))
    for i in range(len(board)):
        print(i + 1, end="")
        for k in board[i]:
            print(k, end='')
        print("\n")


board[0][coordinates["e"]] = template.format(whiteFigures["WK"])
board[0][coordinates["d"]] = template.format(whiteFigures["WQ"])
board[0][coordinates["f"]] = template.format(whiteFigures["WB"])
board[0][coordinates["g"]] = template.format(whiteFigures["WKn"])
board[0][coordinates["h"]] = template.format(whiteFigures["WR"])
board[0][coordinates["c"]] = template.format(whiteFigures["WB"])
board[0][coordinates["b"]] = template.format(whiteFigures["WK"])
board[0][coordinates["a"]] = template.format(whiteFigures["WR"])
WP = template.format(whiteFigures["WP"])

board[7][coordinates["e"]] = template.format(blackFigures["BK"])
board[7][coordinates["d"]] = template.format(blackFigures["BQ"])
board[7][coordinates["f"]] = template.format(blackFigures["BB"])
board[7][coordinates["g"]] = template.format(blackFigures["BKn"])
board[7][coordinates["h"]] = template.format(blackFigures["BR"])
board[7][coordinates["c"]] = template.format(blackFigures["BB"])
board[7][coordinates["b"]] = template.format(blackFigures["BKn"])
board[7][coordinates["a"]] = template.format(blackFigures["BR"])
BP = template.format(blackFigures["BP"])

for i in range(8):
    board[6][i] = BP
    board[1][i] = WP


# game main loop
def check_player_color(selctedFigure):
    if (PLAYER == WHITE and selctedFigure in whiteFigures.values()) or (
            PLAYER == BLACK and selctedFigure in blackFigures.values()):
        return True
    return False


def get_correct_step(player):
    while True:
        inp = input("Enter step like (a 2 a 4)")
        parsed = inp.split()
        if len(parsed) != 4:
            print("incorrect input string try again")
            continue
        selected_letter = parsed[0]  # ete abcdefgh chi uremn error
        destination_letter = parsed[2]  # ete abcdefgh chi uremn error
        try:
            selected_index = int(parsed[1]) - 1  # ete > 8  uremn error
            destination_index = int(parsed[3]) - 1  # ete > 8  uremn error
        except ValueError:
            print("Incorrect input string try again")
            continue
        if selected_letter not in coordinates.keys():
            print("Invalid selected letter")
            continue
        if selected_index not in coordinates.values():
            print("Invalid selected index")
            continue
        if destination_letter not in coordinates.keys():
            print("Invalid destination letter")
            continue
        if destination_index not in coordinates.values():
            print("Invalid destination index")
            continue
        selected_figure = board[selected_index][coordinates[selected_letter]].split("|")[1].strip()
        if selected_figure is "":
            print("You cant move empty :D")
            continue
        if not check_player_color(selected_figure):
            print("You cant move enemy's figure")
            continue
        return selected_letter, selected_index, destination_letter, destination_index


def move(selected_letter, selected_index, destination_letter, destination_index):
    board[destination_index][coordinates[destination_letter]] = board[selected_index][coordinates[selected_letter]]
    board[selected_index][coordinates[selected_letter]] = template.format(" ")
    print_board()

print_board()

while True:
    print("Player: " + PLAYER)
    if PLAYER is BLACK:
        sL, sI, dL, dI = get_correct_step(BLACK)
        move(sL, sI, dL, dI)
        PLAYER = WHITE
    elif PLAYER is WHITE:
        sL, sI, dL, dI = get_correct_step(WHITE)
        move(sL, sI, dL, dI)
        PLAYER = BLACK
