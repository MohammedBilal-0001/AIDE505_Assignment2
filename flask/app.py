from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/Hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello, World!"})

app.run(debug=True,host='0.0.0.0', port=5000)
