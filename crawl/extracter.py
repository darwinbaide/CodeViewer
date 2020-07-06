import sys
import os, re
from lxml import etree
from rake_nltk import Rake # for keywords creation
import requests
import crawler
import mysql1


TAG_RE = re.compile(r'<[^>]+>')
headerPath="/html/body/div[2]/div[1]/div/div/div/h1/a[1]/code/span"
headerContent="/html/body/div[2]/div[1]/div/div/div"
headerPath2="/html/body/div[2]/div[1]/div/div/div/h1"
orignal="https://docs.python.org/3/library"  # the original site to use in making absolute urls

def getHeader(response,xpath,xpath2,contentPath):
    # there are two xpaths for this site as there are two types of pages on this page and it will try and then the other if not found
    response2=urlAbsolute(response)
    tree = etree.HTML(response2)
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

    # there is only one xpath for the content regardless of what type of page it is
    node=tree.xpath(contentPath)
    try:
        content=etree.tostring(node[0])
    except:
        content=""

    return(output+"(++#++)"+str(content))

def cleanup(command1):
    #this is meant to get rid of anything that would create conflicts when passing into the mysql command such as colons and semicolons
    result=command1.replace("'","(#c#)")   # swap the colon with a unique identifier (#c#)
    result=result.replace("\"","(#s#)")      # swap the colon with a unique identifier (#s#)


    return result#returns the resulting command without the colons that could cause a problem

def urlAbsolute(text1):# this method will swap out any relative ursl wit their absolute counterpart as it will be displayed on a different site and wont have that originator
    tree = etree.HTML(text1)
    node=tree.xpath('//a/@href')
    fullContent= text1
    for links in node:
        siteName=links
        if("https" not in siteName):
            if(siteName[0]=='/'):
                siteName=orignal+siteName
            else:
                siteName=orignal+"/"+siteName
        fullContent=fullContent.replace(links,siteName)# this will do a replace in the html for any of the relative and swap to the absolute
    return fullContent

def remove_tags(text): # for the keyword extraction, dont want any thml tags in there
    return TAG_RE.sub('', text)

def mainStart():
    print("START")
    print("------------------------------------------------------------")
    with open("linkOutput.txt","r") as tr:
        lines=tr.readlines()# gets all the lines 
        
    for line in lines:# this will go through all the links in the file and try to extract specific content from the sites
        if(line==""):
            continue
        #print(line)
        text=crawler.loadMain(line)
        headerText=getHeader(text,headerPath,headerPath2,headerContent)
        Title=headerText.split("(++#++)")[0]
        contentText=headerText.split("(++#++)")[1].replace("'","''")
        contentText= cleanup(contentText)# this will clean up the command getting rid of anything that might break it
        """ 
        r = Rake() # Uses stopwords for english from NLTK, and all puntuation characters.

        r.extract_keywords_from_text(   remove_tags(contentText))

        #r.get_ranked_phrases() # To get keyword phrases ranked highest to lowest.
        
        for phrase in r.get_ranked_phrases_with_scores():
            print(phrase)

        exit()

         """

        print(Title)
        #print(cleanup(contentText))
        
        command="INSERT INTO `codestorage`.`codefiles`(`codeName`,`language`,`version`,`active`,`example`)VALUES('"+Title+"','Python','3.8',1,'"+contentText+"');"
        #print(command)
        mysql1.runCommand(command)
        print('Content Extracted\n')
        

def test():
    print("test")
    result=mysql1.runCommand("INSERT INTO `codestorage`.`codefiles`(`codeName`,`keywords`,`description`,`relatedTopics`,`language`,`version`,`active`,`example`,`exampleFile`,`exampleLocation`)VALUES(`Print`,``,``,``,`Python`,`3.8`,1,headertext,``,``);")

       



if __name__ == "__main__":
    mainStart()
    #test()