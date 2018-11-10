const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')

const data = {
    id: 10
}

const token = jwt.sign(data, '123abc')
console.log(token)
const decoded = jwt.verify(token, '123abc')
console.log(decoded)

// const message = 'I am user number 3'
// const hash = SHA256(message)

// console.log(`Message: ${message}`)
// console.log(`Hash: ${hash}`)

// const data = {
//     id: 4
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)).toString()
// }