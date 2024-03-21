from flask import Flask, render_template, request, jsonify, redirect, url_for
import time
# import torch
import NovaBot as nv

app = Flask(__name__)

@app.route("/chat_hack")
def chat_hack():
    return render_template("chat_hack.html")

@app.route("/nova_pacho")
def nova_pacho():
    return render_template("pacho_loading.html")

@app.route("/chat")
def nova_logo():
    return render_template("chat.html")

@app.route("/") 
def index():
    return render_template("nova_logo.html")

@app.route("/get", methods=["GET", "POST"])



def chat():
    msg = request.form["msg"]
    input = msg
    return nv.generate_response(input)

if __name__ == '__main__':
    app.run()
