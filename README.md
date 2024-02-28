# NovaBot

## Overview

Welcome to the NovaBot project! This is a simple yet powerful chat-bot designed to facilitate conversations with users. Please note that this version is currently in the testing phase, and there are no deployment options available yet.

## Features

- **Conversation Handling:** The chat-bot is equipped to engage in meaningful conversations with users.
- **Natural Language Understanding:** It employs Natural Language Processing (NLP) techniques to comprehend user input.
- **Responses:** The chat-bot provides dynamic and contextually relevant responses based on the input received.

## Getting Started
Before running the code, make sure you have the api key as an environment variable, refer to [this link](https://www3.ntu.edu.sg/home/ehchua/programming/howto/Environment_Variables.html) on how to do so if you use a Windows-Based machine. If your machine is macOs/linux based, use the `export` command on the terminal; make sure the variable is named "API_KEY". 

Follow these steps to get the chat-bot up and running for testing:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/gruponovaeafit/chatbot-nova.git
   cd chatbot-nova
   ```

2. **Create a Virtual Environment called `chatbot`, inside the `code` folder**
   ```bash
   cd code
   python3 -m venv chatbot
   ```

3. **Activate venv in macOs/linux (being already in the `code` folder)**
   ```bash
   source chatbot/bin/activate
   ```  
   **Activate in Windows(CMD) (being already in the `code` folder)**
   ```bash
   /chatbot/Scripts/activate.bat
   ```
   **Activate in Windows(PS) (being already in the `code` folder)**
   ```bash
    /chatbot/Scripts/activate.ps1

   ```
4. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```
5. **Run**
    ```bash
    cd backend
    python NovaBot.py

    ```
## Usage

The chat-bot is designed to respond to a wide range of user inputs. Feel free to ask questions, make statements, or engage in casual conversation.

```
Ingresa tu pregunta!, (escribe 'exit' para salir): Hablame de Communities

NovaBot: Las comunidades son un elemento clave en el ámbito de las relaciones públicas y especialmente en el trabajo del departamento de RRPP de NOVA. Una comunidad se puede definir como un grupo de personas con intereses o características compartidas que se unen con un propósito común.

 

En el contexto de NOVA, las comunidades son fundamentales para fomentar el apoyo, la participación y el compromiso de nuestro público objetivo. 
Podemos tener comunidades dentro de nuestra universidad, como grupos de estudiantes interesados en la música, el arte, la sustentabilidad, el emprendimiento, entre otros. También podemos establecer comunidades externas, como colaboradores y colaboradoras habituales de nuestros eventos, patrocinadores y proveedores.

 

Una de las formas en que el departamento de RRPP se involucra con las comunidades es a través de la construcción y mantenimiento de alianzas estratégicas. Estas alianzas nos permiten acceder a nuevos recursos, aumentar nuestra visibilidad y expandir nuestra influencia. Por ejemplo, podemos establecer alianzas con marcas reconocidas en el ámbito de la música para llevar a cabo conciertos o festivales conjuntos. También podemos establecer colaboraciones con proveedores de equipos audiovisuales para mejorar la calidad de nuestros eventos.

 

Además, el departamento de RRPP se encarga de mantener una buena relación con nuestros patrocinadores. Estas relaciones son cruciales para mantener el financiamiento y los recursos necesarios para llevar a cabo nuestros eventos de manera exitosa. La comunicación constante y efectiva con 
los patrocinadores nos permite mostrarles el retorno de inversión que obtienen al asociarse con NOVA, así como también entender sus necesidades 
y expectativas.

 

Es importante mencionar que las comunidades no solo se limitan a la gestión de alianzas y patrocinios. También debemos prestar atención a las necesidades y deseos de nuestra comunidad interna de estudiantes y miembros de NOVA. Esto implica estar presentes en las redes sociales, organizar actividades y eventos de interés para ellos, y brindar una comunicación clara y accesible.

 

En resumen, las comunidades juegan un papel fundamental en el trabajo del departamento de RRPP de NOVA. A través de la construcción de alianzas 
estratégicas y la gestión efectiva de patrocinios, buscamos fortalecer nuestra presencia y calidad en los eventos que organizamos. Además, nos enfocamos en mantener una buena relación y comunicación constante con nuestra comunidad interna y externa, asegurando así el éxito y la continuidad de nuestras actividades.
```
## Testing Guidelines

During the testing phase, focus on the following aspects:

- **Input Variations**: Test the chat-bot with a variety of inputs to ensure robustness.
- **Context Retention**: Check if the chat-bot maintains context in longer conversations.
- **Error Handling**: Test how the chat-bot handles unexpected or invalid inputs.

## Known Issues

- **Deployment Options**: Currently, there are no deployment options available. This version is intended for testing purposes only.

## Akwnoledgments

- Thanks to Alejito, Zcharick, Samuel, Amelia and David for making this project possible.
