from asyncio.windows_events import NULL
from concurrent.futures import process
from importlib.resources import path
import re
from werkzeug.utils import secure_filename
from flask import Flask, flash, request, redirect, send_file, send_from_directory, url_for
import os
import imp
from flask import Flask, jsonify, render_template, request
import pickle
import numpy as np
from keras import models
from ML_Model import ML_Model_Good_Merchant as GMM
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
model = models.load_model('ML_Model/savedmodel.h5')

UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'webm'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
app.secret_key = "secret-key"


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# @app.route('/searchimage')
# def image():
    # if request.method == 'GET':
    # return app.send_static_file('../public/index.html')
# @app.errorhandler(404)
# def not_found(e):


# @app.route('/search', methods=['GET'])
# def f():
#     return "something"
@app.route('/qimage', methods=['POST'])
def image_binary():
    # pred_text(request.path)

    if 'file' not in request.files:
        flash('No file part')
        return redirect(request.path)

    file = request.files['file']

    if file.filename == '':
        flash('No image selected for uploading or no URL added')
        return redirect(request.path)

    elif file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        # print("yash",filename,filepath)
        filepath = 'static/uploads/' + filename
        image = GMM.process_image_binary(filepath)
        pred_text = GMM.predict_image(image, model)
        os.remove(filepath)
        # pred_text(request.path)
        return {'q': pred_text}
        # return pred_text
    else:
        flash('Allowed image types are -> png, jpg, jpeg, gif')
        return redirect(request.path)


@app.route('/qimageurl', methods=['POST'])
def image_url():
    path = request.form['url']
    if path:
        image = GMM.process_image_url(path)
    else:
        flash('No image selected for uploading or no URL added')
        return redirect('/searchimage')
    pred_text = GMM.predict_image(image, model)
    return {'q': pred_text}
    # return pred_text


if __name__ == '__main__':
    # app.run(debug=True)
    osPort = os.getenv("PORT")
    if osPort == None:
        port = 5000
    else:
        port = int(osPort)
    app.run(host='0.0.0.0', port=port)