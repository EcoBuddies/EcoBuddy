import tensorflow as tf
from keras.preprocessing.image import ImageDataGenerator

# Define hyperparameters
batch_size = 32
num_epochs = 10
input_shape = (256, 256, 3) # assuming images are RGB and 256x256 pixels

# Create image data generators for training and testing
train_datagen = ImageDataGenerator(
    rescale=1./255, # rescale pixel values to [0, 1]
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True
)

test_datagen = ImageDataGenerator(rescale=1./255)

train_generator = train_datagen.flow_from_directory(
    "machine-learning/data/data_256/train_dataset",
    target_size=input_shape[:2],
    batch_size=batch_size,
    class_mode="categorical"
)
test_generator = test_datagen.flow_from_directory(
    "machine-learning/data/data_256/test_dataset",
    target_size=input_shape[:2],
    batch_size=batch_size,
    class_mode="categorical"
)

# Define the model architecture
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), activation="relu", input_shape=input_shape),
    tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
    tf.keras.layers.Conv2D(64, (3, 3), activation="relu"),
    tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation="relu"),
    tf.keras.layers.Dropout(0.5),
    tf.keras.layers.Dense(train_generator.num_classes, activation="softmax")
])

# Compile the model
model.compile(
    optimizer="adam",
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)

# Train the model
model.fit(
    train_generator,
    epochs=num_epochs,
    validation_data=test_generator
)

# Evaluate the model on the test set
test_loss, test_acc = model.evaluate(test_generator)
print("Test accuracy:", test_acc)