const express = require('express')

//create the actual express app
const app = express()

//listen on a specific port: 3000
app.listen(3000, function() {
    console.log('Server started on port 3000')
})