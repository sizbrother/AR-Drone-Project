import face_recognition
from Naked.toolshed.shell import execute_js, muterun_js
from pathlib import Path


count = 0
result = execute_js('/Users/zamankhan/Desktop/ar-drone\ project/repl.js')
q = []
'''

while (count < 1000):
    result = execute_js('/Users/zamankhan/Desktop/ar-drone\ project/repl.js')

    if result:
        print("good")
    else:
        print("Keep on Keeping on")

    
    c = 0
    while(True):
    
        file_path = "/Users/zamankhan/Desktop/ar-drone project/frame"+str(c)+".png"
        if(file_path.is_file() == False):
            next_frame = c - 1
            q.append(next_frame)
            q.append(next_frame-1)
            break
        c++
    
    num = q.pop(0)
    
    image = face_recognition.load_image_file("/Users/zamankhan/Desktop/ar-drone project/frame3.png")
    face_locations = face_recognition.face_locations(image)

    print("Face Found at" + str(face_locations))
    count += 1
'''
image = face_recognition.load_image_file("/Users/zamankhan/Desktop/ar-drone project/frame3.png")
face_locations = face_recognition.face_locations(image)
print("Face Found at" + str(face_locations))
