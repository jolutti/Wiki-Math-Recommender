import HTMLParser
h = HTMLParser.HTMLParser()

#Open and read file
file = open("C:\\Users\\User\\Desktop\\Math-extracted-nodes.xml","r")
fileread = unicode(file.read(),"UTF-8")

#Escape HTML entities
fileread = h.unescape(fileread)

#Save Decoded HTML entities
newfile = open("C:\\Users\\User\\Desktop\\Math-decoded.xml","w")
newfile.write(unicode(fileread).encode("utf-8"))
file.close()