from typing import Optional

from pydantic import BaseModel

# Define your data models and schemas here
# For now, using generic examples

class Question(BaseModel):
    """
    Data model for chatbot questions.

    This model is used to represent the structure of the data that the chatbot expects to receive
    when a user asks a question. The `question` attribute is a required field that contains the text
    of the question itself. Additional fields can be added as needed to capture more information
    about the question or the user.
    """

    question: str


class ResponseError(BaseModel):
    """
    Data model for API error responses.

    Whenever the API encounters an error, be it a user-made error, a server error, or any other type of error,
    it will respond with this model. Having a standardized error response format ensures that clients can
    easily understand and handle errors consistently. The `detail` attribute provides a descriptive message
    about the specific error, aiding in debugging and issue resolution.
    """

    detail: str
