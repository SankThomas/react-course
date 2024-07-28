import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Database connection successful");
} catch (error) {
  console.error(error);
}

let db = client.db("employees");

export default db;
