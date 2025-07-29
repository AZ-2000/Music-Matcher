print("before fastapi import")
from fastapi import FastAPI
print("before pydantic import")

from pydantic import BaseModel
print("before pydantic import")

# from typing import List
print("before pandas import")
import pandas as pd
print("before pipeline import")
from pipeline_bge import bge_flow
print("before cors import")
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

print("before api init")
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # or ["*"] for all
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
print("after api initialization ")

class UserText(BaseModel):
    text: str
    
print("before api call")

@app.post("/bgepost")
async def bgepost(input:UserText):
    try:
        if not input.text.strip():
            return {"error": "Empty input text."}
        result_df: pd.DataFrame = bge_flow(input.text)
        artist_list = result_df["artist_name"].tolist()
        return{"artists":artist_list}
    except Exception as e:
        return{"error":str(e)}

