import cv2
import numpy as np
from pytesseract import image_to_string

def return_recognized_text(image):

  recognized_text = image_to_string(image)

  recognized_text = recognized_text.split('\n')
  
  return recognized_text

def crop_image(image, top_left, size):
  x, y = top_left
  h, w = size
  cropped_image = image[y:y+h, x:x+w]
  cv2.imwrite('machine-learning/images/cropped.png', cropped_image)

def return_text(image):
  original = image.copy()
  gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  blur = cv2.GaussianBlur(gray, (3,3), 0)
  thresh = cv2.adaptiveThreshold(blur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 5, 5)

  # Perform morph close to merge letters together
  kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5,5))
  close = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel, iterations=3)

  # Find contours, contour area filtering, extract ROI
  cnts, _ = cv2.findContours(close, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)[-2:]

  for c in cnts:
    x,y,w,h = cv2.boundingRect(c)
    ROI = original[y:y+h, x:x+w]
    cv2.rectangle(image, (x, y), (x + w, y + h), (36,255,12), 3)

  # Perform text extraction
  ROI = cv2.GaussianBlur(ROI, (3,3), 0)
  data = image_to_string(ROI, lang='eng', config='--psm 6')
  print(data)

def find_recyclable_icon(image, recyclable_icon):

  gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  recyclable_icon_gray = cv2.cvtColor(recyclable_icon, cv2.COLOR_BGR2GRAY)
  result = cv2.matchTemplate(gray, recyclable_icon_gray, cv2.TM_CCOEFF_NORMED)
  min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
  top_left = max_loc
  crop_image(image, top_left, recyclable_icon_gray.shape)
  return top_left

def recognize_numbers(image):

  gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

  _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

  contours, hierarchy = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

  numbers = []

  for contour in contours:
      
      x, y, w, h = cv2.boundingRect(contour)

      if w > 10 and h > 10:

          digit = gray[y:y+h, x:x+w]

          resized_digit = cv2.resize(digit, (28, 28), interpolation=cv2.INTER_AREA)

          input_digit = resized_digit.reshape(1, 28 * 28)

          numbers.append(input_digit)
  return numbers

image = cv2.imread('machine-learning/images/test_5.png', cv2.IMREAD_COLOR)
recyclable_icon = cv2.imread('machine-learning/images/recyclable_icon.png', cv2.IMREAD_COLOR)

cropped = cv2.imread('machine-learning/images/cropped.png', cv2.IMREAD_COLOR)

find_recyclable_icon(image, recyclable_icon)
find_recyclable_icon(image, recyclable_icon)
recognize_numbers(cropped)
