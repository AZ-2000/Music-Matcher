import re
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import pandas as pd
from prefect import task, flow

df = pd.read_parquet('vscode_vectors_bge.parquet') 
df_25k = pd.read_parquet('df_25k.parquet')
print(df_25k.head())
print(df_25k.columns.tolist())

model_bge = SentenceTransformer("BAAI/bge-small-en-v1.5")
@task
def clean_text(text):
    text = text.lower()
    text = re.sub(r"\[.*?\]", "", text)  # remove [Verse], [Chorus]
    text = re.sub(r"[^a-zA-Z\s]", "", text)  # remove punctuation
    text = re.sub(r"\s+", " ", text).strip()  # remove extra spaces
    return text

@task 
def add_index(df):
    array = np.vstack(df["embedded"].values).astype("float32")
    array
    dim = array.shape[1]
    index = faiss.IndexHNSWFlat(dim, 48, faiss.METRIC_INNER_PRODUCT)
    index.hnsw.efConstruction = 500
    index.hnsw.efSearch = 64
    index.add(array)  
    return index
@task
def query_model_bge(text,index):
    cleaned_text = text
    query = model_bge.encode(cleaned_text, convert_to_numpy=True)
    D, I = index.search(np.expand_dims(query, axis=0), k=5)
    return I, D

@flow(name ="BGE pipeline")
def bge_flow(text: str):
    cleaned = clean_text(text)
    print(df.head())
    index= add_index(df)
    I, D = query_model_bge(cleaned, index)
    print(D)
    top_indices = I[0][:2]
    print("Top indices:", top_indices)
    print(type(top_indices), type(top_indices[0]))
    return df_25k.iloc[top_indices][["artist_name"]]

