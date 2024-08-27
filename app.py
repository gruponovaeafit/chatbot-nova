from flask import Flask, render_template, request, jsonify, redirect, url_for
import time
# import torch
import model.nova_bot as nv

app = Flask(__name__)


@app.route("/")
def chat_nova():
    template_data = {}
    template_data["title"] = "NOVA ChatBot"
    return render_template("chat_nova.html", template_data=template_data)


@app.route("/omegahack")
def chat_omegahack():
    template_data = {}
    template_data["title"] = "NOVA OmegaBot"
    return render_template("chat_omegahack.html", template_data=template_data)


@app.route("/nova_pacho")
def nova_pacho():
    return render_template("pacho_loading.html")


@app.route("/nova_logo")
def nova_logo_():
    return render_template("nova_logo.html")


@app.route("/nova_logo2")
def nova_logo_2():
    return render_template("nova_logo2.html")


@app.route("/omega-logo")
def omega_logo():
    return render_template("omegahack/logo.html")


@app.route("/get", methods=["GET", "POST"])
def chat():
    msg = request.form["msg"]
    input = msg
    return nv.generate_response(input)


if __name__ == '__main__':
    app.run()
