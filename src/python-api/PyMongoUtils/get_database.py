from pymongo import MongoClient

def get_database(username, password):
    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = f"mongodb+srv://{username}:{password}@mycluster.d7cdi.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster"
    
    # Create a connection using MongoClient
    client = MongoClient(CONNECTION_STRING)

    # Create the database
    return client['online_cs_courses']


# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":   
  
   # Get the database
   dbname = get_database()