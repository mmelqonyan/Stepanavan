#!/usr/bin/python3.5
import random
import os

questions = ["Inch lezvov e grvac ays xax@", "Ov e HH varchapety", "Hayastani harevan erkir", "HH mayraqaxaqy"]
answers = ["python", "pashinyan", "vrastan", "erevan"]

rand = random.randint(0,3)
symbols = "| ? |"
answer = answers[rand]
question = questions[rand]
letterbox=[]

for i in range (len(answer)):
    letterbox.append(symbols)

print(*letterbox,sep='')



def startGame():
    mistake = 3
    while mistake > 0:
        print(question)    
        letter = input("Enter a letter: ")
        os.system('clear')
        if letter in str(letterbox):
            print("You have already guessed this letter.\n")
            mistake -= 1
            print("Осталось попыток %d\n" %mistake)    

        if letter not in str(answer):
            print("Try again.\n")

            mistake -= 1
            print("Осталось попыток %d\n" %mistake)  

        for i in range (len(answer)):
            current_char = answer[i]
            if current_char == letter:
                letterbox[i] = '| '+letter+' |'
                

                if '?' not in str(letterbox):
                    print("Congratulations!!! You win.") 
                    return         
        print(*letterbox,sep='')    
    print("You lose.")

startGame()
    
