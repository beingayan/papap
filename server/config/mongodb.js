const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require('dotenv').config();

// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGODB_CLOUD;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
    console.log("uri",uri)
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    
// set timeout to wait untill all process get finsihed
    setTimeout(async()=>{
        await client.close();
    },1000)
  }
}
run().catch(console.dir);

module.exports = run;
