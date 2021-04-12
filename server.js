const express = require('express')

//create the actual express app
const app = express()

//when should happen when the browser makes a GET request
//location: '/'
//callback function: what happens when the route gets visited
app.get('/', function(req, res) {
    res.send('<h1>Hello, world!</h1>')
})
app.get('/contact', function(req, res) {
    res.send('Contact me at: sam.sheets94@gmail.com')
})
app.get('/about', function(req, res) {
    res.send('I live in Loveland, CO.')
})

//listen on a specific port: 3000
app.listen(3000, function() {
    console.log('Server started on port 3000')
})