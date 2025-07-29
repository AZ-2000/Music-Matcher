import os
from dotenv import load_dotenv
from prefect.client import get_client

# Load .env
load_dotenv()

# Read API key from env
api_key = os.getenv("PREFECT_API_KEY")

# Set it as an environment variable for Prefect
os.environ["PREFECT_API_KEY"] = api_key
os.environ["PREFECT_API_URL"] = os.getenv("PREFECT_API_URL")

# Now Prefect will use this key when connecting
