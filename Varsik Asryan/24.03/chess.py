#!/usr/bin/python3.5
class Board:

    board = [['❒ ']*8 for y in range(8)]
    letter= [" a", " b", " c", " d", " e", " f", " g", " h"]

    def draw(self):
        self.board.append(self.letter)
        column = 0
        for i in self.board:
            if column  < 8:
                column+=1
            else:
                column=" "
            print(column,*i, sep='', end="\n")
create = Board()
create.draw()


