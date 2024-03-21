from flask import Flask, render_template, request, jsonify, redirect, url_for
import time
# import torch
import NovaBot as nv


# tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-medium")
# model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-medium")


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

def get_Chat_response(text):
    
    # Let's chat for 5 lines
    for step in range(5):
        # encode the new user input, add the eos_token and return a tensor in Pytorch
        new_user_input_ids = tokenizer.encode(str(text) + tokenizer.eos_token, return_tensors='pt')

        # append the new user input tokens to the chat history
        bot_input_ids = torch.cat([chat_history_ids, new_user_input_ids], dim=-1) if step > 0 else new_user_input_ids

        # generated a response while limiting the total chat history to 1000 tokens, 
        chat_history_ids = model.generate(bot_input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)

        # pretty print last ouput tokens from bot
        return tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)

if __name__ == '__main__':
    app.run()