const { MongoClient, ServerApiVersion } = require("mongodb");

require('dotenv').config();

const database = require('./database')
const express = require('express');
const app = express();

let database;

const userRoutes = require('./src/users/routes');

const port = process.env.PORT || 3000;



app.use('/users', userRouter);
//app.use('/api', apiRoutes); puedes hacer un archivo api en src que contenga las rutas

app.get('', async (req, res) =>{
    const collection = database.db().collection('Users');
    const users = await collection.find({}).toArray();
    res.send(users);
})


const uri = process.env.DB_URL;

const client = new MongoClient(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 });

 

database.connect().then(client => {
    const db = client.db('Cluster0');
    database.db(db);
    app.listen(port, () => {
        console.log('app is running in port ' + port);
    });

}).catch(err => {
    console.log('Failed to connect to database');
})


