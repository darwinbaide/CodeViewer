import os




location="F:\\Z-Storage\\code-viewer\\"

d = "F:\\Z-Storage\\code-viewer\\"
for path in os.listdir(d):
    full_path = os.path.join(d, path)
    f = open(full_path, "r")
    content=f.read()
    f.close()


    f = open(full_path, "w")
    f.write(content.replace("\\n",""))
    f.close()