const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp',  { useNewUrlParser: true })

// const Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// })
const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})
// const newTodo = new Todo({
//     text: 'Cook Dinner'
// })

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }).catch((err) => console.log('Unable to save todo'))

const user = new User({
   
})

user.save().then((doc) => {
    console.log('Saved todo', doc)
}).catch((err) => console.log(err))