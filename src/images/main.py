from time import sleep
import cv2
import os
import shutil



print('Resize images in current directory (not in inner directories)')
print('Be aware of losing quality when upscaling and overwriting when resizing same files!\n')



try:
   x = int( input('Enter X value (min: 1): ') ) / 100
   y = int( input('Enter Y value (min: 1): ') ) / 100

   if x <= 0: x = 1
   if y <= 0: y = 1

except Exception as e:
   print(f'ERROR: Incorrect value. \nMessage: { str(e) }')
   print('Press any key to exit')
   input()

   exit(0)



images = list(
   filter(
      lambda x: x.endswith(('.png', '.jpg', '.jpeg')), 
      os.listdir()
   )
)



os.system('cls')
print('Resizing... \n\n')



for img in images:
   dirName = 'original_images'

   if not os.path.exists(dirName):
      os.mkdir(dirName)

   shutil.copyfile(img, f'original_images/{ img }')

   read_img = cv2.imread(img)
   res_img = cv2.resize(read_img, (0, 0), fx = x, fy = y, interpolation = cv2.INTER_CUBIC)

   cv2.imwrite(img, res_img)

   print(f'Image -{ img }- resized')
   sleep(.1)