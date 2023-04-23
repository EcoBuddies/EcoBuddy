import cv2
import os
import shutil

def resize_image(img, SIZE = (256,256)):
  new_size = SIZE
  resized_img = cv2.resize(img, new_size)
  return resized_img

def copy_dir(src_dir, dest_dir):

  shutil.copytree(src_dir, dest_dir)
  
  for root, dirs, files in os.walk(dest_dir):
    for file in files:
      if file.endswith('.png') or file.endswith('.jpg') or file.endswith('.jpeg'):
        img_path = os.path.join(root, file)
        img = cv2.imread(img_path)
        resized_img = resize_image(img)
        cv2.imwrite(img_path, resized_img)

src_dir = 'machine-learning/data/data_original'
dest_dir = 'machine-learning/data/data_256'
copy_dir(src_dir, dest_dir)