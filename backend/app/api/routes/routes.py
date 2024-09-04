import logging
from typing import List

from fastapi.responses import JSONResponse

# Configuration, models, methods and authentication modules imports
from app.api.config.db import (add_item, delete_item, find_item, get_items,
                               update_item)
from app.api.config.env import API_NAME
from app.api.config.limiter import limiter
from app.api.methods.methods import convert_objectid_to_str, is_valid_objectid
from app.api.models.models import Question, ResponseError
from app.bot.nova_bot import NovaBot
from fastapi import APIRouter, Request
from slowapi.errors import RateLimitExceeded

router = APIRouter()

# Log file name
log_filename = f"api_{API_NAME}.log"

# Configurate the logging level to catch all messages from DEBUG onwards
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] - %(message)s",
    handlers=[logging.FileHandler(log_filename), logging.StreamHandler()],
)

logger = logging.getLogger(__name__)

bot = NovaBot()


@router.post(
    "/",
    responses={
        429: {"model": ResponseError, "description": "Too many requests."},
        500: {"model": ResponseError, "description": "Internal Server Error."},
    },
)
@limiter.limit("5/minute")
def chatbot(question: Question):
    """
    Endpoint to handle chatbot queries.

    Args:
        question (Question): The question object containing the user's query.

    Returns:
        dict: A dictionary containing the chatbot's response.

    Raises:
        HTTPException: If the rate limit is exceeded or an internal server error occurs.

    This endpoint is rate-limited to 5 requests per minute. If the rate limit is exceeded,
    a 429 status code is returned. If an internal server error occurs, a 500 status code is returned.
    """
    try:
        response = {}
        response["answer"] = bot.generate_response(question=question.question)
        return response
    except RateLimitExceeded:
        raise HTTPException(status_code=429, detail="Too many requests.")
    except Exception as e:
        logger.error(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error.")
