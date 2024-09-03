import os

from dotenv import load_dotenv

# Add here all the environment variables

load_dotenv()
# Basic configuration
API_NAME = os.getenv("API_NAME")
PRODUCTION_SERVER_URL = os.getenv("PRODUCTION_SERVER_URL")
DEVELOPMENT_SERVER_URL = os.getenv("DEVELOPMENT_SERVER_URL")
LOCALHOST_SERVER_URL = os.getenv("LOCALHOST_SERVER_URL")
IS_PRODUCTION = os.getenv(
    "IS_PRODUCTION"
)  # Boolean to determine if is prod environment or nah
