
from tkinter import *
from PIL import ImageTk, Image
import qrcode
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import pandas as pd

#canvas declaration
root = Tk()
root.title("SaralVote by team _phoenix")
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
header2bg='#22577a'
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
    head = Label(text="VOTER CARD", font="Bold 20", bg='white', fg='black')
    head.place(x=380, y=150)
    head1 = Label(text="\"Ink your finger", font="Bold 15", bg='white', fg='black')
    head1.place(x=387, y=190)
    head1 = Label(text="Cast your vote this time...\"", font="Bold 15", bg='white', fg='black')
    head1.place(x=360, y=220)
    img2 = ImageTk.PhotoImage(Image.open("./media/votercard1.png"))
    panel.configure(image=img2)
    panel.image = img2
    panel.place(x=350, y=280)
    panel.tkraise()

def clicked2(panel):
    clearworkspace()
    head = Label(text="New Registration form", font="Bold 20", bg='white', fg='black')
    head.place(x=320, y=150)
    #heading2= Label(text="ENROL FOR VOTER ID", font="Bold 20", bg=header1bg, fg='black')
    #heading2.place(x=250, y=200)
    canvas1 = Canvas(width= 450, height=330, bg=header1bg, highlightbackground='black', highlightthickness=2)
    canvas1.place(x=225, y=200)
    text3 = Label(text="Name:", font="Bold 15", bg=header1bg, fg='black')
    text3.place(x=250, y=250)
    username = Entry(root, width=20, highlightthickness=0)
    username.place(x=350, y=250)
    text4 = Label(text="Phone:", font="Bold 15", bg=header1bg, fg='black')
    text4.place(x=250, y=300)
    phone = Entry(root, width=20, highlightthickness=0)
    phone.place(x=350, y=300)
    text4 = Label(text="xyz:", font="Bold 15", bg=header1bg, fg='black')
    text4.place(x=250, y=350)
    username1 = Entry(root, width=20, highlightthickness=0)
    username1.place(x=350, y=350)
    text5 = Label(text="xyz:", font="Bold 15", bg=header1bg, fg='black')
    text5.place(x=250, y=400)
    username2 = Entry(root, width=20, highlightthickness=0)
    username2.place(x=350, y=400)
    text6 = Label(text="Referral code", font="Bold 15", bg=header1bg, fg='black')
    text6.place(x=250, y=450)
    username3 = Entry(root, width=20, highlightthickness=0)
    username3.place(x=350, y=450)
    text7 = Label(text="(optional)", font="Bold 15", bg=header1bg, fg='black')
    text7.place(x=250, y=475)
    btn = Button(root, text="submit", fg="blue", command=clicked, highlightthickness=0)
    btn.place(x=400, y=500)
    head2 = Label(text="Link your existing Voter ID", font="Bold 20", bg='white', fg='black')
    head2.place(x=300, y=545)
    canvas2 = Canvas(width= 450, height=120, bg=header1bg, highlightbackground='black', highlightthickness=2)
    canvas2.place(x=225, y=580)
    text8 = Label(text="Enter EPIC ID", font="Bold 15", bg=header1bg, fg='black')
    text8.place(x=250, y=620)
    username4 = Entry(root, width=20, highlightthickness=0)
    username4.place(x=380, y=620)
    btn = Button(root, text="send OTP", fg="blue", command=clicked, highlightthickness=0)
    btn.place(x=395, y=660)
    
def clicked4(panel):
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
    


def clicked5(panel):
    clearworkspace()
    #generate QR here
    tex = Label(text="Your QR for fast check-in", font="Bold 20", fg='black')
    tex.place(x=330, y=150)
    voterid="NDT23546"
    theQR = qrcode.make(voterid)
    filename = voterid+".png"
    theQR.save(filename)
    myQRcode = ImageTk.PhotoImage(Image.open("./media/"+voterid+".png"))
    panel.configure(image=myQRcode)
    panel.image = myQRcode
    panel.place(x=300, y=190)
    panel.tkraise()
    inst1= Label(text="Instructions to Use QR:-", font="Bold 20", fg='black')
    inst1.place(x=270, y=500)
    inst2= Label (text="1. Generate this QR before reaching Polling officer1", font="Bold 15", fg='black')
    inst2.place(x=300, y=530)
    inst3= Label (text="2. Show him/her this QRfor scanning", font="Bold 15", fg='black')
    inst3.place(x=300, y=550)
    inst4= Label (text="3. Your details will be verified automatically", font="Bold 15", fg='black')
    inst4.place(x=300, y=570)
    inst5= Label (text="4. Proceed to the next step in voting", font="Bold 15", fg='black')
    inst5.place(x=300, y=590)
dictionary = {"slot" : None}
def f1():
    dictionary["slot"] = "7:00"
def f2():
    dictionary["slot"] = "7:30"
def f3():
    dictionary["slot"] = "8:00"
def f4():
    dictionary["slot"] = "8:30"
def f5():
    dictionary["slot"] = "9:00"
def f6():
    dictionary["slot"] = "9:30"
def f7():
    dictionary["slot"] = "10:00"
def f8():
    dictionary["slot"] = "10:30"
def f9():
    dictionary["slot"] = "11:00"
def f10():
    dictionary["slot"] = "11:30"
def f11():
    dictionary["slot"] = "12:00"
def f12():
    dictionary["slot"] = "12:30"
def f13():
    dictionary["slot"] = "01:00"
def f14():
    dictionary["slot"] = "01:30"
def f15():
    dictionary["slot"] = "02:00"
def f16():
    dictionary["slot"] = "02:30"
def f17():
    dictionary["slot"] = "03:00"
def f18():
    dictionary["slot"] = "03:30"
def f19():
    dictionary["slot"] = "04:00"
def f20():
    dictionary["slot"] = "04:30"
def f21():
    dictionary["slot"] = "05:00"
def f22():
    dictionary["slot"] = "05:30"
def booking():
    text=Label(root, text="✓ Your Slot is Booked at: "+dictionary["slot"], fg='green', font="Bold 20")
    text.place(x=310, y=680)
    
def clicked6(panel):
    clearworkspace()
    data1 = {'slot': ['7:00', '7:30', '8:00', '8:30', '9:00','09:30','10:00','10:30','11:00','11:30',
    '12:00','12:30','1:00','1:30','2:00','2:30','3:00','3:30','4:00','4:30','5:00','5:30'],
         'bookings': [12,13,15,15,20,28,24,20,14,10,9,8,7,10,13,16,14,12,18,20,5,2]
         }
    df1 = pd.DataFrame(data1)
    figure1 = plt.Figure(figsize=(5, 4), dpi=100)
    ax1 = figure1.add_subplot(1,1,1)
    bar1 = FigureCanvasTkAgg(figure1, root)
    #bar1.get_tk_widget().pack(side=RIGHT, fill=BOTH)
    bar1.get_tk_widget().place(x=200, y=130)
    df1 = df1[['slot', 'bookings']].groupby('slot').sum()
    df1.plot(kind='line', legend=True, ax=ax1)
    
    tec = Label(text="Select a slot", font="Bold15")
    tec.place(x=250, y=530)
    
    b1 = Button(root, text='07:00', command=lambda:f1())
    b2 = Button(root, text='07:30', command=lambda:f2())
    b3 = Button(root, text='08:00', command=lambda:f3())
    b4 = Button(root, text='08:30', command=lambda:f4())
    b5 = Button(root, text='09:00', command=lambda:f5())
    b6 = Button(root, text='09:30', command=lambda:f6())
    b7 = Button(root, text='10:00', command=lambda:f7())
    b8 = Button(root, text='10:30', command=lambda:f8())
    b9 = Button(root, text='11:00', command=lambda:f9())
    b10 = Button(root, text='11:30', command=lambda:f10())
    b11 = Button(root, text='12:00', command=lambda:f11())
    b12 = Button(root, text='12:30', command=lambda:f12())
    b13 = Button(root, text='01:00', command=lambda:f13())
    b14 = Button(root, text='01:30', command=lambda:f14())
    b15 = Button(root, text='02:00', command=lambda:f15())
    b16 = Button(root, text='02:30', command=lambda:f16())
    b17 = Button(root, text='03:00', command=lambda:f17())
    b18 = Button(root, text='03:30', command=lambda:f18())
    b19 = Button(root, text='04:00', command=lambda:f19())
    b20 = Button(root, text='04:30', command=lambda:f20())
    b21 = Button(root, text='05:00', command=lambda:f21())
    b22 = Button(root, text='05:30', command=lambda:f22())
    b1.place(x=250, y=560)
    b2.place(x=300, y=560)
    b3.place(x=350, y=560)
    b4.place(x=400, y=560)
    b5.place(x=450, y=560)
    b6.place(x=250, y=580)
    b7.place(x=300, y=580)
    b8.place(x=350, y=580)
    b9.place(x=400, y=580)
    b10.place(x=450, y=580)
    b11.place(x=250, y=600)
    b12.place(x=300, y=600)
    b13.place(x=350, y=600)
    b14.place(x=400, y=600)
    b15.place(x=450, y=600)
    b16.place(x=250, y=620)
    b17.place(x=300, y=620)
    b18.place(x=350, y=620)
    b19.place(x=400, y=620)
    b20.place(x=450, y=620)
    b21.place(x=330, y=640)
    b22.place(x=380, y=640)
    b23=Button(root, text= "BOOK",height=2, width=5, command=lambda: booking(), bg='green')
    b23.place(x=550, y=560)

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
    tex1=Label(text="Welcome to the voting e-services portal.", font="Bold 20")
    tex1.place(x=250, y=180)
    tex2=Label(text="1. This portal avails voter digital facilities at hand.", font="Bold 15")
    tex2.place(x=250, y=230)
    tex3=Label(text="2. The voter may generate his digital voter ID card.", font="Bold 15")
    tex3.place(x=250, y=270)
    tex4=Label(text="   after registering on the application.", font="Bold 15")
    tex4.place(x=250, y=310)
    tex5=Label(text="3. The voter may enroll himself for the votercard.", font="Bold 15")
    tex5.place(x=250, y=350)
    tex6=Label(text="4. The voter may learn about his constituency and the", font="Bold 15")
    tex6.place(x=250, y=390)
    tex7=Label(text="   leaders contesting in the elections.", font="Bold 15")
    tex7.place(x=250, y=430)
    tex8=Label(text="5. The QR for fast check-in at polling booth can be", font="Bold 15")
    tex8.place(x=250, y=470)
    tex9=Label(text="   done in the click of a button.", font="Bold 15")
    tex9.place(x=250, y=510)
    tex10=Label(text="6. The slot booking for your vote at your boot may be", font="Bold 15")
    tex10.place(x=250, y=550)
    tex11=Label(text="  done prior to voting.", font="Bold 15")
    tex11.place(x=250, y=590)

    #############################################
    #umanglogo2 = ImageTk.PhotoImage(Image.open("./media/theme.jpg"))
    #umang2 = Label(root, image=umanglogo2, highlightthickness=0)
    #umang2.place(x=0, y=550)
    #umang2.tkraise()

    header2bg='#22577a'
    header2canvas = Canvas(width=700, height=50, bg=header2bg, highlightthickness = 0)
    header2canvas.place(x=0, y=80)
    header = Label(text="WELCOME RITIK !", font="Bold 20", bg=header2bg, fg='white')
    header.place(x=10, y=90)

    header3bg='#e5e5e5'
    header3canvas = Canvas(width=200, height=740, bg=header3bg, highlightthickness = 0)
    header3canvas.place(x=0, y=130)

    
    footerbg='#22577a'
    footercanvas = Canvas(width=700, height=50, bg=footerbg, highlightthickness = 0)
    footercanvas.place(x=0, y=720)
    footertext1 = Label(text="Developed by Team: _phoenix", font="Bold 15", bg=footerbg, fg='white')
    footertext1.place(x=260, y=730)
    
    voterid = "NDT23546"
    #To keep reference image in function passing
    img = ImageTk.PhotoImage(Image.open("./media/referencedummy.png"))
    panel = Label(root, image=img)
    panel.image = img


    btnfg='blue'
    btnbg='white'
    btn1 = Button(root, text="VIEW MY VOTER CARD", bg=btnbg, fg=btnfg, command=lambda: clicked1(panel))
    btn1.place(x=10, y=150)
    btn2 = Button(root, text="APPLY FOR VOTER CARD", bg=btnbg, fg=btnfg, command=lambda: clicked2(panel))
    btn2.place(x=10, y=200)
    btn4 = Button(root, text="ABOUT MY CONSTITUENCY", bg=btnbg, fg=btnfg, command=lambda: clicked4(panel))
    btn4.place(x=10, y=250)
    btn5 = Button(root, text="DIGITAL CHECK-IN", bg=btnbg, fg=btnfg, command=lambda: clicked5(panel))
    btn5.place(x=10, y=300)
    btn6 = Button(root, text="BOOK SLOT", bg=btnbg, command=lambda: clicked6(panel), fg=btnfg)
    btn6.place(x=10, y=350)
    btn7 = Button(root, text="OTHER SERVICES", bg=btnbg, fg=btnfg)
    btn7.place(x=10, y=400)


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
text5.place(x=260, y=430)
text6 = Label(text="1. Do not share your password with anyone", font="Bold 15", bg='white', fg='black')
text6.place(x=150, y=460)
text7 = Label(text="2. It is recommended to set a strong password", font="Bold 15", bg='white', fg='black')
text7.place(x=150, y=490)
text8 = Label(text="3. ECI cares about your privacy", font="Bold 15", bg='white', fg='black')
text8.place(x=150, y=520)
text9 = Label(text="4. Lorem ipsum tatanini hello world", font="Bold 15", bg='white', fg='black')
text9.place(x=150, y=550)




footerbg='#22577a'
footercanvas = Canvas(width=700, height=50, bg=footerbg, highlightthickness = 0)
footercanvas.place(x=0, y=720)
footertext1 = Label(text="Developed by Team: _phoenix", font="Bold 15", bg=footerbg, fg='white')
footertext1.place(x=260, y=730)


root.mainloop()
