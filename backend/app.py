from flask import Flask,  jsonify
from flask_cors import CORS
import pyjokes

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def get_joke():
    return pyjokes.get_joke()

@app.route('/request_joke')
def request_joke():
    joke = get_joke()
    return jsonify({'joke': joke})

if __name__ == '__main__':
    app.run(debug=False, host="0.0.0.0", port=8085)

# React port: 8083
# Flask port: 8085
