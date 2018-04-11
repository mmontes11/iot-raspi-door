import RPi.GPIO as GPIO
import time
import sys
import signal 

GPIO.setmode(GPIO.BCM)
DOOR_SENSOR_PIN = 17
GPIO.setup(DOOR_SENSOR_PIN, GPIO.IN, pull_up_down = GPIO.PUD_UP)
isOpen = None
oldIsOpen = None 

def cleanupLights(signal, frame): 
    GPIO.cleanup() 
    sys.exit(0)


signal.signal(signal.SIGINT, cleanupLights) 
while True: 
    oldIsOpen = isOpen 
    isOpen = GPIO.input(DOOR_SENSOR_PIN)

    print "GPIO value: ", GPIO.input(DOOR_SENSOR_PIN)

    if (isOpen and (isOpen != oldIsOpen)):  
        print "Space is unoccupied!"  
    elif (isOpen != oldIsOpen):  
        print "Space is occupied!"  
    time.sleep(0.1)