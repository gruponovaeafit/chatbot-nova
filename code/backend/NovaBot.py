#V1.0 Beta 

#imports
from openai import OpenAI
import pandas as pd
from scipy.spatial import distance
import os
import base64

#Initial Setup, API_KEY, and data directory
encoded_api_key = os.environ.get('API_KEY')
key = base64.b64decode(encoded_api_key).decode('utf-8')

current_directory = os.path.dirname(__file__)
parent_directory = os.path.dirname(current_directory)
root_directory = os.path.dirname(parent_directory)
file_path = os.path.join(root_directory, 'data', 'cerebro.csv')

contextos = pd.read_csv(file_path, sep = ",")
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

def get_index(question):
    question_embeddings = obtener_embeddings(question)
    cos_distances = []
    for i in range(len(context_embeddings)):
        cos_distances.append(distance.cosine(contextos['Embeddings'][i],question_embeddings))
    return cos_distances.index(abs(min(cos_distances)))

def generate_response(question):

    """
    Function made to generate a response to user prompt
    """
    context_ind = get_index(question)
    response = client.chat.completions.create(model="gpt-3.5-turbo",messages=[{"role": "system", "content": "Eres Pacho, la mascota del grupo estudiantil NOVA."},{"role": "user", "content": f"usando el contexto {contextos['Contexto'][context_ind]}, responde:{question}"}])
    return response.choices[0].message.content
