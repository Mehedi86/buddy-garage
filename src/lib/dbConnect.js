
import { MongoClient, ServerApiVersion } from "mongodb";


export default function dbConnect(collectionName) {
    const uri = "mongodb+srv://buddyGarage:KmpuDZfwEcB6l7Hd@cluster0.kpht8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    return client.db("buddyGarage").collection(collectionName)
}



// buddyGarage
// KmpuDZfwEcB6l7Hd