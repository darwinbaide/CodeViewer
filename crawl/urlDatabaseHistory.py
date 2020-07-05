import shelve
import sys
from datetime import datetime
import os
import re, string





def CheckDatabase(url,links, ):    
    listOfLinks=links.split("<-@->") # this is list of urls
    print("Starting DB Check")
    s = shelve.open(url) #makes a direrctory or opens one if already made
    output=""
    for links in listOfLinks:
        try:
            attempt=s[links]# this is just to check if it can open
            s[links] =  datetime.now().strftime("%m-%d-%Y")# update the latest entry date
            
        except:
            if(output== ""):
                output=links
            else: 
                output=output+ "<-@->"+ links
            s[links] =  datetime.now().strftime("%m-%d-%Y")# add it to th history if not already in
    return(output)



