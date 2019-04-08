#!/usr/bin/python3

import  sys, getch

def readLineWithHiddenCharacters():
    sBuffer = ''
    while True:
        c = getch.getch()
        if c == '\n':
            return sBuffer
        elif ord(c) == 127:
            if len(sBuffer) > 0:
                sys.stdout.write('\x08 \x08')
                sys.stdout.flush()
                sBuffer = sBuffer[0:-1]
            continue
        else:
            sys.stdout.write('*')
            sys.stdout.flush()
            sBuffer += c
