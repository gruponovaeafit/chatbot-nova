from flask import Flask, render_template, request, jsonify
import NovaBot as nv

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("chat.html")

@app.route("/get", methods=["GET", "POST"])

def chat():
    msg = request.form["msg"]
    input = msg
    return nv.generate_response(input)

if __name__ == '__main__':
    app.run()
