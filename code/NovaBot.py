#V1.0 Beta 

#imports
from openai import OpenAI
import pandas as pd
from scipy.spatial import distance
import os

#initial setup, API key, and loads contexts for the bot
key = "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"

currPath = os.getcwd()
new = "data/cerebro.csv"
dataPath = new.join(currPath.rsplit("code", 1))

contextos = pd.read_csv(dataPath, sep = ",")
client = OpenAI(api_key = key)

def obtener_embeddings(texto):
    """
    Function that gets embeddings to a given string
    """
    response = client.embeddings.create(input=texto,model="text-embedding-ada-002")    
    return response.data[0].embedding

#TODO Make context embeddings persistent
context_embeddings = []
for i in range(8): 
    context_embeddings.append(obtener_embeddings(contextos["Contexto"][i]))

contextos["Embeddings"] = context_embeddings


def generate_response(question):
    """
    Function made to generate a response to user prompt
    """

    question_embeddings = obtener_embeddings(question)
    cos_distances = []
    for i in range(8):
        cos_distances.append(distance.cosine(contextos["Embeddings"][i],question_embeddings))
    response = client.chat.completions.create(model="gpt-3.5-turbo",messages=[{"role": "system", "content": "Eres un miembro del grupo estudiantil NOVA."},{"role": "user", "content": f"usando el contexto {contextos['Contexto'][cos_distances.index(abs(min(cos_distances)))]}, responde:{quesinon}"}])
    return response.choices[0].message.content

# TODO Structure to connect with a frontend

while True:
    txt = input("Ingresa tu pregunta!, (escribe 'exit' para salir): ")
    if txt == "exit":
        break
    print("NovaBot: "+generate_response(txt))
