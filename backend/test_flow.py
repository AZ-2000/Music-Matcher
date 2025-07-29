from prefect import flow

@flow
def test_connection():
    print("✅ Flow ran successfully and is connected to Prefect Cloud!")

if __name__ == "__main__":
    test_connection()
