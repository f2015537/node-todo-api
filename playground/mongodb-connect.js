const { MongoClient } = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to mongodb server')
    const db = client.db('TodoApp')
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Divyam',
    //     age: 21,
    //     location: "pilani"
    // }, (err, res) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err)
    //     }
    //     console.log(res.ops[0]._id.getTimestamp())
    // })
    client.close()
})