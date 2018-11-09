const express = require('express')
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    const todo  = new Todo({
        text: req.body.text
    })

    todo.save().then(doc => {
        res.json(doc)
    }).catch(err => res.status(400).json(err))
})

app.get('/todos', (req,res) => {
    Todo
    .find()
    .then((todos) => {
        res.json({todos})
    })
    .catch(err => res.status(400).json(err))
})

app.get('/todos/:id', (req,res) => {
    const {id} = req.params
    if(!ObjectID.isValid(id)) {
        return res.status(404).json()
    }
    Todo
    .findById(id)
    .then(todo => {
        if(!todo) return res.status(404).json()
        res.json({todo})})
    .catch(err => res.status(400).json())
})

app.listen(3000, () => {
    console.log('Started on port 3000\n')
})

module.exports = {
    app
}