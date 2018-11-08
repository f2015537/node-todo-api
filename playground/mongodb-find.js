const { MongoClient, ObjectID } = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to mongodb server')
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5be4230d53d2fb2ae655d7ce')
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }).catch(err => console.log('Unable to fetch todos', err))
    
    db.collection('Users').find({name : "Divyam"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }).catch(err => console.log('Unable to fetch todos', err))
    // client.close()
})