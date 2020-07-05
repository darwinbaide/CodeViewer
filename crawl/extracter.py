import sys
import os
from lxml import etree
import requests
import crawler
import mysql1

headerPath="/html/body/div[2]/div[1]/div/div/div/h1/a[1]/code/span"
headerContent="/html/body/div[2]/div[1]/div/div/div"
headerPath2="/html/body/div[2]/div[1]/div/div/div/h1"

def getHeader(response,xpath,xpath2,contentPath):
    #xpath=xpathFix(xpath)# quick fix for the xpath just incase
    tree = etree.HTML(response)
    node=tree.xpath(xpath)
    
    try:
        output=node[0].text
    except:
        node=tree.xpath(xpath2)
        try:
            output=node[0].text
        except:
            
            output=""

    content=""
    node=tree.xpath(contentPath)
    try:
        content=etree.tostring(node[0])
    except:
        content=""

    




    
    return(output+"(++#++)"+str(content))



def mainStart():
    print("START")
    print("------------------------------------------------------------")
    with open("linkOutput.txt","r") as tr:
        lines=tr.readlines()# gets all the lines 
        
    for line in lines:
        if(line==""):
            continue
        #print(line)
        text=crawler.loadMain(line)
        headerText=getHeader(text,headerPath,headerPath2,headerContent)
        Title=headerText.split("(++#++)")[0]
        contentText=headerText.split("(++#++)")[1].replace("'","''")
        print(Title)
        command="INSERT INTO `codestorage`.`codefiles`(`codeName`,`language`,`version`,`active`,`example`)VALUES('"+Title+"','Python','3.8',1,'"+contentText+"');"
        print(command)
        mysql1.runCommand(command)


def test():
    print("test")
    result=mysql1.runCommand("INSERT INTO `codestorage`.`codefiles`(`codeName`,`keywords`,`description`,`relatedTopics`,`language`,`version`,`active`,`example`,`exampleFile`,`exampleLocation`)VALUES(`Print`,``,``,``,`Python`,`3.8`,1,headertext,``,``);")

       



if __name__ == "__main__":
    mainStart()
    #test()