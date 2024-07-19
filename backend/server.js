//to start-> npm init -y 
//npm install express@4
//node server.js  
//node --watch server.js
//npm i dotenv
//npm install mongodb //you use mongoose also instead of mongodb
//npm i body-parser
//npm i cors
const express = require('express')
const { MongoClient,ObjectId } = require('mongodb');
const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv =require('dotenv')
dotenv.config() //to save secret password
//You can use this to check if .env is working then you can save passwords and all of that  
// console.log(process.env.MONGO_URI) //to save secret password




// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'SecretVault';
const app = express()
const port = 3000
app.use(bodyparser.json())
app.use(cors())

client.connect();

//Get all Passwords
app.get('/', async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('data');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})


//Save the Passwords
app.post('/', async(req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('data');
    const findResult = await collection.insertOne(password);
    res.send({sucess: true, result: findResult})
})

//Delete a password
app.delete('/', async(req, res) => {
    const { id } = req.body;
    const db = client.db(dbName);
    const collection = db.collection('data');
    const findResult = await collection.deleteOne({ _id: new ObjectId(id) });
    res.send({sucess: true, result: findResult})
})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})