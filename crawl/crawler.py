import sys
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
import time, json
from lxml import etree
import requests
import urlDatabaseHistory
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains


""" This Script is meant to create a list of links that are found on the target site for future content extraction """



orignal="https://docs.python.org/3/library"
target="https://docs.python.org/3/library/index.html"

def requestHTML(site):       
    try:    # this will try to just request the html of a URL
        response = requests.get(site)
        response=response.text
        response=response.encode(encoding='UTF-8',errors='strict')
    except:# incase the xpath wasnt present in the first request, try loading the page and check there
        print("error")
        return "Timeout."
    return str(response)# if it made it through one of those then return the html
         
   
def loadMain(site1):
    opts = Options()
    opts.headless = True # tells the script to run chrome headless
    opts.add_experimental_option('excludeSwitches', ['enable-logging'])# dont output the console errors for the webpage
    browser = Chrome(options=opts)# sets the options to the browser object
    browser.get(site1) # opens the given url
    browser.execute_script("return document.documentElement.innerHTML;")# will wait for page to load
    root = browser.find_element_by_xpath('/*')# find root
    text=root.get_attribute('innerHTML')# get inner html of root and whole document
    browser.close() 
    return text
    


def getLinks(response,site):
    #xpath=xpathFix(xpath)# quick fix for the xpath just incase
    tree = etree.HTML(response)
    node=tree.xpath('//a/@href')
    output=""
    for links in node:
        siteName=links
        if("https" not in siteName):
            if(siteName[0]=='/'):
                siteName=orignal+siteName
            else:
                siteName=orignal+"/"+siteName
        if(output==""):
            output=siteName
        else:
            output=output+"<-@->"+siteName
    return(output)



def getContent(targetTO):
    print("Starting A Round")
    htmlText=requestHTML(targetTO)
    links=getLinks(htmlText,orignal)
    return links

def main():
    links= getContent(target)
    for parts in links.split("<-@->"):
        with open("LinkOutput.txt","a")as tg:
            tg.write(parts+"")


    
    print("Done")
    


if __name__ == "__main__":
    main()