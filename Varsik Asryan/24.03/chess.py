#!/usr/bin/python3.5
class Board(objekt):
    def _init_(self):
        self.board = [['❒ ']*8 for y in range(8)]
    def _str_(self):
        res = ''
        for y in range(8,0,-1):
            res += ''.join(map(str,self.board[y])) + "\n"
        return res

a = Board()
print a
letter = [" ", "A" ,"B" , "C" , "D" , "E" , "F ", "G", "H"]
print (letter)


