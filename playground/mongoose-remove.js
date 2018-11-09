const {ObjectID} = require('mongodb')

const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')

// Todo.deleteMany({}).then(res => {
//     console.log(res)
// })

Todo.findByIdAndRemove('5be5d06753d2fb2ae6563fbe')
.then(console.log)