import os
import json
from PIL import Image

def get_image_files(directory):
    image_files = []
    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)
        if os.path.isfile(filepath):
            try:
                with Image.open(filepath) as img:
                    image_files.append(filename)
            except IOError:
                pass
    return image_files

def save_to_json(data, filename):
    with open(filename, 'w') as json_file:
        json.dump(data, json_file)

if __name__ == "__main__":
    current_directory = os.getcwd()
    image_files = get_image_files(current_directory)
    save_to_json(image_files, 'image_files.json')
