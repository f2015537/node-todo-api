require('./config/config')

const express = require('express')
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')
const _ = require('lodash')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const app = express()
const port = process.env.PORT

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

app.delete('/todos/:id', (req,res) => {
    const {id} = req.params
    if(!ObjectID.isValid(id)) {
        return res.status(404).json()
    }
    Todo.findByIdAndRemove(id).then(todo => {
        if(!todo) return res.status(404).json()
        res.json({todo})
    }).catch(err => res.status(400).json())
})

app.patch('/todos/:id', (req,res) => {
    const {id} = req.params
    const body = _.pick(req.body, ['text', 'completed'])
    if(!ObjectID.isValid(id)) {
        return res.status(404).json()
    }
    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime()
    }
    else {
        body.completed = false
        body.completedAt = null
    }
    Todo
    .findByIdAndUpdate(id, {$set: body}, {new: true})
    .then(todo => {
        if(!todo) return res.status(404).json()
        res.send({todo})
    })
    .catch(err => res.status(400).json())

})

app.post('/users', (req,res) => {
    const body = _.pick(req.body, ['email', 'password'])
    const user = new User(body)
    user.save().then(() => {
        return user.generateAuthToken()
    })
    .then((token) => {
        res.header('x-auth', token).json(user)
    })
    .catch(err => res.status(400).json(err))
})

app.listen(port, () => {
    console.log(`Started on port ${port}\n`)
})

module.exports = {
    app
}