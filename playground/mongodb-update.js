const { MongoClient, ObjectID } = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to mongodb server')
    const db = client.db('TodoApp')
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result)
    // })
    // db.collection('Todos').findOneAndDelete({completed: false}).then(doc => console.log(doc.value))
    // client.close()
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5be42cf453d2fb2ae655d9f5")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(console.log)
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5be415818217d6468c66a1f2")
    }, {
        $set: {
            name: "Divyam"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(console.log)
})