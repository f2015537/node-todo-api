const {ObjectID} = require('mongodb')

const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')

// const _id = '5be59e55af4e600ceb1fa42511'
// if(!ObjectID.isValid(_id)) {
//  console.log('ID not valid')
// }
// Todo.findOne({
//     _id
// }).then((todo) => {
//     console.log('Todo', todo)
// })

// Todo.findById(_id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by Id', todo)
// }).catch(console.log)
const _id = '5be5a5cc53d2fb2ae6563248'

User.findById(_id).then(user => {
    if(!user) {
        return console.log('ID not found')
    }
    console.log('User by ID', user)
}).catch(console.log)