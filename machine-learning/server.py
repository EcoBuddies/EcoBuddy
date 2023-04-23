from flask import Flask, request, jsonify
import base64
import numpy as np
import cv2
import tensorflow as tf
from tensorflow.keras.applications.mobilenet_v3 import preprocess_input

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predictResult():
    if request.method == 'POST':
        data = request.get_json()

        base64img = data['base64img']
        image_bytes = base64.b64decode(base64img)
        img_file = open('image.jpg', 'wb')
        img_file.write(image_bytes)
        img_file.close()
        
        # Load the saved model
        model = tf.keras.models.load_model('model.h5')
        class_names = ['bio', 'emb', 'ost', 'pap', 'ste', 'zbc']
        
        SIZE = (256, 256)
        image = cv2.imread('image.jpg')
        resized_img = cv2.resize(image, SIZE)
        preprocessed_image = preprocess_input(resized_img)

        # Add a new dimension to create a batch of one image
        resized_img = tf.expand_dims(resized_img, axis=0)

        # Predict the class probabilities of the input image
        prediction = model.predict(resized_img)

        #print index of the highest probability
        response = {'label': class_names[np.argmax(prediction)]}
        return jsonify(response)

if __name__ == "__main__":
    app.run(port=5000)