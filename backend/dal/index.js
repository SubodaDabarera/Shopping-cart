const {MongoClient} = require('mongodb');
const URI = 'mongodb+srv://subodaaf:subodaaf@cluster0.zxzzs.mongodb.net/test'


const client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

try{
    client.connect(err => {
        if(err){
            console.error(err);
            process.exit(-1);
        }
    
        console.log('Successfully connected to Mongo DB');
    })
}catch(err){
    console.log(err)
}


module.exports = client;