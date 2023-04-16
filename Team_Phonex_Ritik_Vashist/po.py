
from tkinter import *
from PIL import ImageTk, Image
import csv
import cv2
import pyzbar.pyzbar as pyzbar

#canvas declaration
root = Tk()
root.title("The QRcode generator & Scanner")
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
header2bg='#5ca4a9'
header2canvas = Canvas(width=700, height=50, bg=header2bg, highlightthickness = 0)
header2canvas.place(x=0, y=80)
header = Label(text="Welcome to the e-services portal of ECI", font="Bold 20", bg=header2bg, fg='white')
header.place(x=170, y=90)

#text content
text2 = Label(text="LOGIN", font="Bold 20", fg='black')
text2.place(x=320, y=160)

#login input form
logincanvas = Canvas(width= 400, height=185, bg=header1bg, highlightbackground='black', highlightthickness=2)
logincanvas.place(x=150, y=210)
usersusername = "a"
userpassword = "a"
text3 = Label(text="USERNAME:", font="Bold 15", bg=header1bg, fg='black')
text3.place(x=200, y=240)
username = Entry(root, width=20, highlightthickness=0)
username.place(x=300, y=240)
text4 = Label(text="PASSWORD:", font="Bold 15", bg=header1bg, fg='black')
text4.place(x=200, y=290)
password = Entry(root, width=20, highlightthickness=0)
password.place(x=300, y=290)

def clearworkspace():
    header2canvas = Canvas(width=500, height=580, bg='white', highlightthickness = 0)
    header2canvas.place(x=205, y=140)
    
def clicked1(panel):
    clearworkspace()
    head = Label(text="Your Candidate Card", font="Bold 25", bg='white', fg='black')
    head.place(x=350, y=150)
    img2 = ImageTk.PhotoImage(Image.open("./media/candidate.png"))
    panel.configure(image=img2)
    panel.image = img2
    panel.place(x=250, y=200)
    panel.tkraise()

def clicked2(panel):
    clearworkspace()
    img2 = ImageTk.PhotoImage(Image.open("./media/table.png"))
    panel.configure(image=img2)
    panel.image = img2
    panel.place(x=250, y=150)
    panel.tkraise()

def clicked3(panel):
    clearworkspace()
    img = ImageTk.PhotoImage(Image.open("./media/dadri.png"))
    panel.configure(image=img)
    panel.image = img
    panel.place(x=300, y=150)
    panel.tkraise()
    text8 = Label(text="Dadri", font="Bold 25", bg='white', fg='black')
    text8.place(x=400, y=420)
    text9 = Label(text="Mr. Ritik, your constituency is Dadri. Let's tell you something about your", font="Bold 12", bg='white', fg='black')
    text10 = Label(text="constituency: Dadri is a town and a municipal board in Gautam Buddha", font="Bold 12", bg='white', fg='black')
    text11 = Label(text="Nagar District in the state of Uttar Pradesh, India. Dadri Railway Station", font="Bold 12", bg='white', fg='black')
    text12 = Label(text="is a complex yard in North Central Railway spread over six kilometers on", font="Bold 12", bg='white', fg='black')
    text13 = Label(text="busiest route of Delhi–Kanpur–Patna–Howrah section of Indian Railways ", font="Bold 12", bg='white', fg='black')
    text14 = Label(text="and also having with National Thermal Power Corporation (NTPC Dadri  ", font="Bold 12", bg='white', fg='black' )
    text15 = Label(text="thermal power plant) and Container Depot. Dadri is founded by Bhatti", font="Bold 12", bg='white', fg='black')
    text15 = Label(text="Gujjars and Gaur Brahmin 300 years ago", font="Bold 12", bg='white', fg='black')
    text9.place(x=250, y=470)
    text10.place(x=250, y=500)
    text11.place(x=250, y=530)
    text12.place(x=250, y=560)
    text13.place(x=250, y=590)
    text14.place(x=250, y=620)
    text15.place(x=250, y=650)

def clicked4(panel):
    clearworkspace()
    i = 0
    vid = cv2.VideoCapture(0)
    vid.set(cv2.CAP_PROP_FRAME_WIDTH, 200)
    vid.set(cv2.CAP_PROP_FRAME_HEIGHT, 200)
    lbl = Label(root, font=('times', 20))
    while i<2:
        _,f = vid.read()
        decoded = pyzbar.decode(f)
        for obj in decoded:
            lbl.config(text=f'{obj.data}')
            i += 1
        #if(len(decoded)!=0):
            #print(decoded[0].data)
        cv2.imshow('QRCode',f)
        cv2.waitKey(5)
        cv2.destroyAllWindows
    text3 = Label(text="✓", font="Bold 40", bg='white', fg='green')
    text3.place(x=320, y=150)
    text4 = Label(text="The User is Verified", font="Bold 20", bg='white', fg='green')
    text4.place(x=360, y=160)
    text5 = Label(text="The decoded id is: ", font="Bold 20", bg='white', fg='black')
    text5.place(x=340, y=200)
    text6 = Label(text=decoded[0].data, font="Bold 30", bg='white', fg='black')
    text6.place(x=300, y=250)
    img2 = ImageTk.PhotoImage(Image.open("./media/votercard1.png"))
    panel.configure(image=img2)
    panel.image = img2
    panel.place(x=320, y=330)
    panel.tkraise()
    
def renderservicespage():

    #CLEAR FRAME
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
    text1 = Label(text="VOTER e-SERVICES", font="Bold 30", bg=header1bg, fg='black')
    text1.place(x=350, y=20)

    header2bg='#5ca4a9'
    header2canvas = Canvas(width=700, height=50, bg=header2bg, highlightthickness = 0)
    header2canvas.place(x=0, y=80)
    header = Label(text="WELCOME MR. PRADEEP !", font="Bold 20", bg=header2bg, fg='white')
    header.place(x=10, y=90)

    header3bg='#e5e5e5'
    header3canvas = Canvas(width=200, height=740, bg=header3bg, highlightthickness = 0)
    header3canvas.place(x=0, y=130)

    tex1=Label(text="Welcome Officer,", font="Bold 20")
    tex1.place(x=250, y=180)
    tex2=Label(text="               to the voting e-services portal.", font="Bold 20")
    tex2.place(x=250, y=230)
    tex3=Label(text="1. Provides polling officer with online awareness of.", font="Bold 15")
    tex3.place(x=250, y=280)
    tex4=Label(text="   the status of polling at his booth.", font="Bold 15")
    tex4.place(x=250, y=320)
    tex5=Label(text="2. The polling officer can scan Fast checkin QRs of ", font="Bold 15")
    tex5.place(x=250, y=360)
    tex6=Label(text="   voters and instantly verify their name in the ", font="Bold 15")
    tex6.place(x=250, y=400)
    tex7=Label(text="   electoral list.", font="Bold 15")
    tex7.place(x=250, y=440)
    
    
    footerbg='#5ca4a9'
    footercanvas = Canvas(width=700, height=50, bg=footerbg, highlightthickness = 0)
    footercanvas.place(x=0, y=720)
    footertext1 = Label(text="Developed by team _pheonix", font="Bold 15", bg=footerbg, fg='white')
    footertext1.place(x=280, y=730)
    
    #To keep reference image in function passing
    img = ImageTk.PhotoImage(Image.open("./media/referencedummy.png"))
    panel = Label(root, image=img)
    panel.image = img
    panel.place(x=500, y=600)


    btnfg='blue'
    btnbg='white'
    btn1 = Button(root, text="VIEW MY PROFILE", bg=btnbg, fg=btnfg, command=lambda: clicked1(panel))
    btn1.place(x=10, y=150)
    btn2 = Button(root, text="VIEW MY ELECTRORAL ROLL", bg=btnbg, fg=btnfg, command=lambda: clicked2(panel))
    btn2.place(x=10, y=200)
    btn3 = Button(root, text="ABOUT MY CONSTITUENCY", bg=btnbg, fg=btnfg, command=lambda: clicked3(panel))
    btn3.place(x=10, y=250)
    btn4 = Button(root, text="VERIFY A VOTER", bg=btnbg, fg=btnfg, command=lambda: clicked4(panel))
    btn4.place(x=10, y=300)
    btn5 = Button(root, text="OTHER SERVICES", bg=btnbg, fg=btnfg)
    btn5.place(x=10, y=350)


def clicked():
    #text2.configure(text="here")
    res1 = username.get()
    res2 = password.get()
    if(res1 == usersusername and res2 == userpassword):
        renderservicespage()
    #else:
        #text4 = Label(text="Wrong credentials", font="Bold 15", bg=header1bg, fg='black')
        #text4.place(x=200, y=120)

umanglogo1 = ImageTk.PhotoImage(Image.open("./media/theme.jpg"))
umang1 = Label(root, image=umanglogo1, bg='white', highlightthickness=0)
umang1.place(x=0, y=550)

loginbtn = Button(root, text="login in", fg="blue", command=clicked, highlightthickness=0)
loginbtn.place(x=330, y=340)
textn = Label(text="new user ?", font="Bold 10", fg='blue', bg=header1bg)
textn.place(x=160, y=370)
signinbtn = Button(root, text="Register", fg="blue", highlightthickness=0)
signinbtn.place(x=225, y=370)
textnpo = Label(text="forgot password ?", font="Bold 10", fg='blue', bg=header1bg)
textnpo.place(x=440, y=370)
text5 = Label(text="General Guidelines", font="Bold 20", bg='white', fg='black')
text5.place(x=260, y=440)
text6 = Label(text="1. Do not share your password with anyone", font="Bold 15", bg='white', fg='black')
text6.place(x=150, y=470)
text7 = Label(text="2. It is recommended to set a strong password", font="Bold 15", bg='white', fg='black')
text7.place(x=150, y=500)
text8 = Label(text="3. ECI cares about your privacy", font="Bold 15", bg='white', fg='black')
text8.place(x=150, y=530)
text9 = Label(text="4. Lorem ipsum tatanini hello world", font="Bold 15", bg='white', fg='black')
text9.place(x=150, y=560)
footerbg='#5ca4a9'
footercanvas = Canvas(width=700, height=50, bg=footerbg, highlightthickness = 0)
footercanvas.place(x=0, y=720)
footertext1 = Label(text="Developed by team _pheonix", font="Bold 15", bg=footerbg, fg='white')
footertext1.place(x=280, y=730)


root.mainloop()

