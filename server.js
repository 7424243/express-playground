const express = require('express')

//create the actual express app
const app = express()

//when should happen when the browser makes a GET request
//location: '/'
app.get('/', function(req, res) {
    res.send('<h1>Hello, world!</h1>')
})

//listen on a specific port: 3000
app.listen(3000, function() {
    console.log('Server started on port 3000')
})