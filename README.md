This project is a music matcher web application which will take users text as input and output the name of the artist that sung that song based on bge-small model
bge-small and miniLM were tested on the jupyter notebooks and their corresponding vectorized results were stored, the backend of the webapplication only contains the 
pipeline where the input text is encoded onto the model for FAISS HNSW search.

this application was deployed on prefect as an end-to-end machine learning pipeline application
