const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.DB_URL;

const client = new MongoClient(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 });


function connect(){
    return new Promise((resolve,reject) =>{
        client.connect((err) => {
            if(err) {
                console.log('Failed to connect to database');
                reject(err);

            } else {
                //here
                console.log('Connected succesfully');
                resolve(client);
            }
        })
    })
}

module.exports = connect;