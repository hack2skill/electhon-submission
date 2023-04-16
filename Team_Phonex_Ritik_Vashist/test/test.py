import cv2
from cv2 import VideoCapture
from cv2 import waitKey
import webbrowser

cap = cv2.Videocapture(0)
detector = cv2.QRcodeDetector()
while True:
    _,img = cap.read()
    data,one, _= detector.detectAndDecode(img)
    if data:
        a=data
        break
    cv2.imshow('qrscanner', img)
    if cv2.waitkey(1) ==ord('q'):
        break

b=webbrowser.open(str(a))
cap.release(a)
cv2.destroyAllWindow()


