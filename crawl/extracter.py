import sys, uuid
import os, re
from lxml import etree
from rake_nltk import Rake # for keywords creation
import requests
import crawler
import mysql1


TAG_RE = re.compile(r'<[^>]+>')
headerPath="/html/body/div[6]/div[1]/div[1]/h1"
headerContent="/html/body/div[6]/div[1]/div[1]"
descriptionPath="/html/body/div[6]/div[1]/div[1]/p[2]"
orignal="https://docs.python.org/3/library"  # the original site to use in making absolute urls

def getHeader(response,xpath1,xpath2,contentPath):
    # there are two xpaths for this site as there are two types of pages on this page and it will try and then the other if not found
    response2=urlAbsolute(response)
    tree = etree.HTML(response2)
    node=tree.xpath(xpath1)
   
    try:
        output=etree.tostring(node[0])# will try to see if it found an element
        output=str(output)# will then try to convert that into string as thats the desired outcome
        output= remove_tags(output)# cleans up teh tags that might be in the code for the header
        output=output[2:-1].lower()# when converting element to string it will have element tags at start and end , so just removing those
        output=output.replace("python","").replace("function","").replace("\\n","")# all the headers start with python and end with function, so removing to get just the function name
    except:    
        output=""


    node2=tree.xpath(xpath2)# path for description
    
    try:
        descriptor=etree.tostring(node2[0])# will try to see if it found an element
        descriptor=str(descriptor)# will then try to convert that into string as thats the desired outcome
        descriptor=remove_tags(descriptor)
        descriptor=descriptor[2:-1].lower().replace("\\n","")# removing the new line and cast to lowercase for searching
    except:    
        descriptor=""


    content=""

    # there is only one xpath for the content regardless of what type of page it is
    node3=tree.xpath(contentPath)
    try:
        content=etree.tostring(node3[0]) # see if found element
        content=str(content)[2:-1].lower()# convert to string
    except:
        content=""


    return(output+"(++#++)"+content+"(++#++)"+descriptor)

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
    count=0
    for line in lines:# this will go through all the links in the file and try to extract specific content from the sites
        if(line==""):
            continue
        #print(line)
        name=""
        text=crawler.loadMain(line)
        headerText=getHeader(text,headerPath,descriptionPath,headerContent)
        Title=headerText.split("(++#++)")[0]
        contentText=headerText.split("(++#++)")[1]
        descriptor=headerText.split("(++#++)")[2].replace("'","")# remove any colon as used in sql insert
        #contentText= cleanup(contentText)# this will clean up the command getting rid of anything that might break it
        

        print("Title: "+Title)
        print()
        print("Description: "+descriptor)
        print()
        print("Content:"+(contentText))
        count=count+1
        print(count)
        """ if(count>400):
            exit()
        continue """

        
        if(len(contentText)>4000):
            name=nameMe()
            f = open("F:\\Z-Storage\\code-viewer\\"+name+".html", "w")
            f.write(contentText)
            f.close()
            command="INSERT INTO `codestorage`.`codefiles`(`codeName`,`description`,`language`,`version`,`active`,`exampleFile`)VALUES('"+Title+"','"+descriptor+"','Python','3.8',1,'"+name+"');"

        else:

            command="INSERT INTO `codestorage`.`codefiles`(`codeName`,`description`,`language`,`version`,`active`,`example`)VALUES('"+Title+"','"+descriptor+"','Python','3.8',1,'"+cleanup(contentText)+"');"
        print(command)
        mysql1.runCommand(command)
        print('Content Extracted\n')
        

def test():
    print("test")
    result=mysql1.runCommand("INSERT INTO `codestorage`.`codefiles`(`codeName`,`keywords`,`description`,`relatedTopics`,`language`,`version`,`active`,`example`,`exampleFile`,`exampleLocation`)VALUES(`Print`,``,``,``,`Python`,`3.8`,1,headertext,``,``);")

       
def nameMe():
    #this is to get a filename starting with time and date and then random guid to have a unique filename for any downloads.
    return (str(uuid.uuid4()).replace("-",""))


if __name__ == "__main__":
    mainStart()
    #test()