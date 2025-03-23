import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://biddibot:Digimon3!@biddi.7rmgu.mongodb.net/?retryWrites=true&w=majority&appName=biddi";
const options = {};

let client;
let clientPromise;

// Prevent multiple connections in development
if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;