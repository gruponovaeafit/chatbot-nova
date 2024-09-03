# V1.0 Beta

# imports
import os

import pandas as pd
from dotenv import load_dotenv
from openai import OpenAI
from scipy.spatial import distance


class NovaBot:
    """
    NovaBot is a chatbot designed to assist the NOVA student group.

    This class provides methods to generate responses to user prompts using the OpenAI GPT-3.5-turbo model.
    It includes functionality to determine the context of a question and generate appropriate responses.

    Attributes:
        client (OpenAI.Client): The OpenAI client used to interact with the GPT-3.5-turbo model.
        contexts (dict): A dictionary containing various contexts that the bot can use to generate responses.
        context_embeddings (list): A list of embeddings for each context in the contexts dictionary.
    """

    def __init__(self) -> None:
        self.key = os.environ.get("API_KEY")
        self.current_directory = os.path.dirname(__file__)
        self.file_path = os.path.join(self.current_directory, "data", "brain.csv")
        self.contexts = pd.read_csv(self.file_path, sep=";")
        self.client = OpenAI(api_key=self.key)
        self.context_embeddings = []
        self.get_persistent_embeddings()

    def get_embeddings(self, text):
        """
        Function that gets embeddings for a given string.

        This function uses the client to create embeddings for the input text
        using the "text-embedding-ada-002" model. The embeddings are a numerical
        representation of the input text which can be used for various NLP tasks
        such as similarity comparison, clustering, etc.

        Args:
            text (str): The input text for which embeddings are to be generated.

        Returns:
            list: A list of numerical values representing the embeddings of the input text.
        """
        response = self.client.embeddings.create(
            input=text, model="text-embedding-ada-002"
        )
        return response.data[0].embedding

    def get_persistent_embeddings(self):
        """
        Function that retrieves the embeddings for all contexts and stores them in the contexts DataFrame.

        This function iterates over all the contexts in the contexts DataFrame and retrieves the embeddings
        for each context using the `get_embeddings` function. It then stores the embeddings in a new column
        called "embeddings" in the contexts DataFrame.

        Note:
        The embeddings are stored in the contexts DataFrame to avoid redundant API calls when generating responses.

        Returns:
            None
        """
        for i in range(len(self.contexts)):
            self.context_embeddings.append(
                self.get_embeddings(self.contexts["Contexto"][i])
            )

        self.contexts["Embeddings"] = self.context_embeddings


    def get_index(self, question):
        """
        Function that retrieves the index of the most relevant context based on a given question.

        This function calculates the cosine distances between the embeddings of the input question
        and the stored context embeddings. It then returns the index of the context with the minimum
        cosine distance, indicating the most relevant context.

        Args:
            question (str): The input question for which the relevant context index is to be found.

        Returns:
            int: The index of the context with the minimum cosine distance to the question embeddings.
        """
        question_embeddings = self.get_embeddings(question)
        cos_distances = []
        for i in range(len(self.contexts)):
            cos_distances.append(
                distance.cosine(self.contexts["Embeddings"][i], question_embeddings)
            )
        return cos_distances.index(abs(min(cos_distances)))

    def generate_response(self, question):
        """
        Function made to generate a response to user prompt.

        This function takes a user question as input, determines the context index
        for the question, and generates a response using the OpenAI GPT-3.5-turbo model.

        Args:
            question (str): The user's question or prompt.

        Returns:
            str: The generated response from the model.

        Steps:
        1. Get the context index for the question using `self.get_index(question)`.
        2. Create a chat completion request to the OpenAI API with the following messages:
           - A system message indicating the assistant's role.
           - A user message containing the context and the question.
        3. Return the content of the first choice in the response.
        """
        context_index = self.get_index(question)
        response = self.client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "Eres Pacho, el asistente del grupo estudiantil NOVA",
                },
                {
                    "role": "user",
                    "content": f"usando el contexto {self.contexts['Contexto'][context_index]}, responde: {question}",
                },
            ],
        )
        return response.choices[0].message.content
