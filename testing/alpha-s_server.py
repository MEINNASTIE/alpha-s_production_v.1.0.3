from flask import Flask, request, jsonify
import os
import shutil
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DIST_PATH = "/dist" 
TEMP_PATH = "/testing.zip"  

@app.route("/upload-dist", methods=["POST"])
def upload_dist():
    """Uploads and replaces the dist folder"""
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    file.save(TEMP_PATH) 

    if os.path.exists(DIST_PATH):
        shutil.rmtree(DIST_PATH)

    shutil.unpack_archive(TEMP_PATH, DIST_PATH)

    return jsonify({"message": "dist updated successfully"}), 200

@app.route("/reload-dist", methods=["POST"])
def reload_dist():
    return jsonify({"message": "dist reloaded"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000) 
