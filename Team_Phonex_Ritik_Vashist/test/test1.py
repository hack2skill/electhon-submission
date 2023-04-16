from tkinter import *
from PIL import ImageTk, Image
import qrcode

root = Tk()
root.title("The QRcode generator & Scanner")
root.geometry('700x900')

loginbtn = Button(root, text="login in", fg="blue", highlightthickness=0)
loginbtn.place(x=330, y=350)

root.mainloop()



