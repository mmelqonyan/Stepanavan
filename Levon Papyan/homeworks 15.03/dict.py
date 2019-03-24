#!/usr/bin/python3.5


import json

def main():

    print("Welcome")
    print("Press 1 for sign in")
    print("Press 2 for sign up")

    sign = input("Choose a number for your further action : ")

    count_of_tries = 0
    while count_of_tries < 3:
        if sign == "1":
            inputted_login = getString("Enter your login: ")
            inputted_password = getString("Enter your password: ")

            user = sign_in(inputted_login, inputted_password)

            if user:
                print("Welcome " + user["name"])
            else:
                print("wrong username or password")
            return
        elif sign == "2":

            inputted_name = getString("Enter your name: ")
            users = loadUsers("db.json")
            for user in users:
                if user["name"] == inputted_name:
                    print("such data already exists")
                    print("Try again")
                    exit()


            inputted_login = getString("Enter your login: ")
            users = loadUsers("db.json")
            for user in users:
                if user["login"] == inputted_login:
                    print("such data already exists")
                    print("try again")
                    exit()



            inputted_password = getString("Enter your password: ")
            

            sign_up(inputted_name, inputted_login, inputted_password)
            print("Congratulations! You are registered")
            return
        else:
            print("try again")
        count_of_tries += 1
    print("You cent continue , you are robot!!!")


def loadUsers(db_name):
    with open(db_name, 'r+') as db:
        data = json.load(db)
    return data

def updatedUsers(db_name, json_object):
    with open(db_name, "r+") as db:
        data = loadUsers(db_name)
        data.append(json_object)
        json.dump(data, db)

def sign_up(name, login, password):
    newUser = {"name": name, "login": login, "password": password}
    updatedUsers("db.json", newUser)



def sign_in(login, password):
    users = loadUsers("db.json")
    for user in users:
        if user["login"] == login and user["password"] == password:
            return user
    return None

def getString(message):
    string = input(message)
    while not string:
        print("Invalid parameter try again")
        string = input(message)
    return string

main()