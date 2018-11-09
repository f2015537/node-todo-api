const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp',  { useNewUrlParser: true })

const Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
})

// const newTodo = new Todo({
//     text: 'Cook Dinner'
// })

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }).catch((err) => console.log('Unable to save todo'))

const newTodo = new Todo({
    text: 'Eat Healthy',
    completed: true,
    completedAt: 180397
})

newTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}).catch((err) => console.log('Unable to save todo'))