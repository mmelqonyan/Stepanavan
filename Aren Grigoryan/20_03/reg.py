#!/usr/bin/python3.5
from tkinter import *
from tkinter import messagebox
import pickle

root = Tk()
root.geometry("500x500")
root.title("Window of registration")
def registration():
    text = Label(text="Registration!")
    text_log = Label(text="Enter your login!")
    registr_lodin = Entry()
    text_password1 = Label(text="Entre you password")
    registr_password1 = Entry(show="")
    text_password2 = Label(text="Entre you password again")
    registr_password2 = Entry(show="*")
    button_registr = Button(text="Registration", command=lambda: save())
    text.pack()
    text_log.pack()
    registr_lodin.pack()
    text_password1.pack()
    registr_password1.pack()
    text_password2.pack()
    registr_password2.pack()
    button_registr.pack()
    
    def save():
        login_pass_save = {}
        login_pass_save[registr_lodin.get()]=registr_password1.get()
        f = open("login.txt", "wb")
        pickle.dump(login_pass_save, f)
        f.close()
        login()

def login():
    text_login=Label(text="You now can login")
    text_enter_login = Label(text="Enter your login")
    enter_login = Entry()
    text_enter_pass = Label(text="Enter your password")
    enter_password = Entry(show="*")
    button_enter = Button(text="Login", command=lambda: search())
    text_login.pack()
    text_enter_login.pack()
    enter_login.pack()
    text_enter_pass.pack()
    enter_password.pack()
    button_enter.pack()
    
    def search():
        f = open("login.txt", "rb")
        a = pickle.load(f)
        f.close()
        if enter_login.get() in a:
            if enter_password.get() == a[enter_login.get()]:
                messagebox.showinfo("Congratulation! You are online now.")
            else:
                messagebox.showerror("Error!")   
        else:
            messagebox.showerror("Your login or password is not correct")      
registration()
login()

root.mainloop()
