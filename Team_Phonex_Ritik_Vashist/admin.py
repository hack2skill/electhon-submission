
from tkinter import *
from PIL import ImageTk, Image
import csv

#canvas declaration
root = Tk()
root.title("The ECI admin")
root.geometry('700x900')

#userlogin-------------------------------------------------------------------------
#top header
header1bg = '#f3f3f3'
header1canvas = Canvas(width=700, height=80, bg=header1bg, highlightthickness = 0)
header1canvas.place(x=0, y=0)
umanglogo = ImageTk.PhotoImage(Image.open("./media/umanglogo.png"))
umang = Label(root, image=umanglogo, bg=header1bg)
umang.place(x=10, y=10)
digitalindialogo = ImageTk.PhotoImage(Image.open("./media/digitalindia.png"))
digitalindia = Label(root, image=digitalindialogo, bg=header1bg)
digitalindia.place(x=60, y=10)
ECIlogo = ImageTk.PhotoImage(Image.open("./media/ECIlogo.png"))
ECI = Label(root, image=ECIlogo, bg=header1bg)
ECI.place(x=150, y=10)
text1 = Label(text="VOTER e-SERVICES", font="Bold 30", bg=header1bg, fg='black')
text1.place(x=350, y=20)

#second header
header2bg='#feb2a8'
header2canvas = Canvas(width=700, height=50, bg=header2bg, highlightthickness = 0)
header2canvas.place(x=0, y=80)
header = Label(text="The ECI Admin", font="Bold 20", bg=header2bg, fg='white')
header.place(x=300, y=90)

#text content
text2 = Label(text="LOGIN", font="Bold 20", fg='black')
text2.place(x=320, y=170)

#login input form
logincanvas = Canvas(width= 400, height=185, bg=header1bg, highlightbackground='black', highlightthickness=2)
logincanvas.place(x=150, y=220)
usersusername = "a"
userpassword = "a"
text3 = Label(text="USERNAME:", font="Bold 15", bg=header1bg, fg='black')
text3.place(x=200, y=250)
username = Entry(root, width=20, highlightthickness=0)
username.place(x=300, y=250)
text4 = Label(text="PASSWORD:", font="Bold 15", bg=header1bg, fg='black')
text4.place(x=200, y=300)
password = Entry(root, width=20, highlightthickness=0)
password.place(x=300, y=300)

def clearworkspace():
    header2canvas = Canvas(width=500, height=580, bg='white', highlightthickness = 0)
    header2canvas.place(x=205, y=140)
    
def clicked20(panel):
    clearworkspace()
    text3 = Label(text="Voting status update", font="Bold 20", bg='white', fg='green')
    text3.place(x=350, y=150)
    text4 = Label(text="Last updated: 1.5hrs ago", font="Bold 15", bg='white', fg='green')
    text4.place(x=360, y=180)
    img2 = ImageTk.PhotoImage(Image.open("./media/table3.png"))
    panel.configure(image=img2)
    panel.image = img2
    panel.place(x=350, y=210)
    panel.tkraise()
    
def clicked10(panel):
    img2 = ImageTk.PhotoImage(Image.open("./media/influencer.png"))
    panel.configure(image=img2)
    panel.image = img2
    panel.place(x=250, y=280)
    panel.tkraise()
    
def clicked11():
    text3 = Label(text="✓ Mail Send Successful", font="Bold 25", bg='white', fg='green')
    text3.place(x=300, y=600)
    
def clicked2(panel):
    clearworkspace()
    canvas1 = Canvas(width= 450, height=120, bg=header1bg, highlightbackground='black', highlightthickness=2)
    canvas1.place(x=225, y=150)
    text3 = Label(text="Follower", font="Bold 15", bg=header1bg, fg='black')
    text3.place(x=250, y=180)
    text3 = Label(text="Threshold:", font="Bold 15", bg=header1bg, fg='black')
    text3.place(x=250, y=200)
    username = Entry(root, width=20, highlightthickness=0)
    username.place(x=350, y=180)
    btn = Button(text="Mine Contacts", command=lambda: clicked10(panel))
    btn.place(x=400, y=220)
    btn1 = Button(text="Send mails", command=clicked11)
    btn1.place(x=400, y=550)

def renderservicespage():
    for widget in root.winfo_children():
        widget.destroy()
    
    header1bg = '#f3f3f3'
    header1canvas = Canvas(width=700, height=80, bg=header1bg, highlightthickness = 0)
    header1canvas.place(x=0, y=0)
    umanglogo = ImageTk.PhotoImage(Image.open("./media/umanglogo.png"))
    umang = Label(root, image=umanglogo, bg=header1bg)
    umang.image = umanglogo
    umang.place(x=10, y=10)
    digitalindialogo = ImageTk.PhotoImage(Image.open("./media/digitalindia.png"))
    digitalindia = Label(root, image=digitalindialogo, bg=header1bg)
    digitalindia.image=digitalindialogo
    digitalindia.place(x=60, y=10)
    ECIlogo = ImageTk.PhotoImage(Image.open("./media/ECIlogo.png"))
    ECI = Label(root, image=ECIlogo, bg=header1bg)
    ECI.image = ECIlogo
    ECI.place(x=150, y=10)
    
    header2bg='#feb2a8'
    header2canvas = Canvas(width=700, height=50, bg=header2bg, highlightthickness = 0)
    header2canvas.place(x=0, y=80)
    header = Label(text="WELCOME ADMIN !", font="Bold 20", bg=header2bg, fg='white')
    header.place(x=10, y=90)

    header3bg='#e5e5e5'
    header3canvas = Canvas(width=200, height=740, bg=header3bg, highlightthickness = 0)
    header3canvas.place(x=0, y=130)

    
    footerbg='#feb2a8'
    footercanvas = Canvas(width=700, height=50, bg=footerbg, highlightthickness = 0)
    footercanvas.place(x=0, y=720)
    footertext1 = Label(text="Developed by Team: _phoenix", font="Bold 15", bg=footerbg, fg='white')
    footertext1.place(x=260, y=730)
    
    #To keep reference image in function passing
    img = ImageTk.PhotoImage(Image.open("./media/referencedummy.png"))
    panel = Label(root, image=img)
    panel.image = img
    
    btnfg='blue'
    btnbg='white'
    btn1 = Button(root, text="VOTING UPDATES", bg=btnbg, fg=btnfg, command=lambda: clicked20(panel))
    btn1.place(x=10, y=150)
    btn2 = Button(root, text="SOCIAL MEDIA CAMPAIGN", bg=btnbg, fg=btnfg, command=lambda: clicked2(panel))
    btn2.place(x=10, y=200)

def clicked():
    #text2.configure(text="here")
    res1 = username.get()
    res2 = password.get()
    if(res1 == usersusername and res2 == userpassword):
        renderservicespage()
    #else:
        #text4 = Label(text="Wrong credentials", font="Bold 15", bg=header1bg, fg='black')
        #text4.place(x=200, y=120)
        
        
loginbtn = Button(root, text="login in", fg="blue", command=clicked, highlightthickness=0)
loginbtn.place(x=330, y=350)
textn = Label(text="new user ?", font="Bold 10", fg='blue', bg=header1bg)
textn.place(x=160, y=380)
signinbtn = Button(root, text="Register", fg="blue", highlightthickness=0)
signinbtn.place(x=225, y=380)
textnpo = Label(text="forgot password ?", font="Bold 10", fg='blue', bg=header1bg)
textnpo.place(x=440, y=380)
text5 = Label(text="General Guidelines", font="Bold 20", bg='white', fg='black')
text5.place(x=260, y=450)
text6 = Label(text="1. Do not share your password with anyone", font="Bold 15", bg='white', fg='black')
text6.place(x=150, y=480)
text7 = Label(text="2. It is recommended to set a strong password", font="Bold 15", bg='white', fg='black')
text7.place(x=150, y=510)
text8 = Label(text="3. ECI cares about your privacy", font="Bold 15", bg='white', fg='black')
text8.place(x=150, y=540)
text9 = Label(text="4. Lorem ipsum tatanini hello world", font="Bold 15", bg='white', fg='black')
text9.place(x=150, y=570)
footerbg='#feb2a8'
footercanvas = Canvas(width=700, height=50, bg=footerbg, highlightthickness = 0)
footercanvas.place(x=0, y=720)
footertext1 = Label(text="Developed by team _pheonix", font="Bold 15", bg=footerbg, fg='white')
footertext1.place(x=280, y=730)


root.mainloop()

