from flask import Flask,  jsonify
import pyjokes

app = Flask(__name__)

def get_joke():
    return pyjokes.get_joke()

@app.route('/request_joke')
def request_joke():
    joke = get_joke()
    return jsonify({'joke': joke})

if __name__ == '__main__':
    app.run(debug=False, port=8085)
