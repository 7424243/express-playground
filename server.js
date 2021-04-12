const express = require('express')

//create the actual express app
const app = express()

//when should happen when the browser makes a GET request
//location: '/'
//callback function: what happens when the route gets visited
//__dirname: the directory name no matter if the server is running locally or via a cloud
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')//sending an html file to the browser
})

//listen on a specific port: 3000
app.listen(3000, function() {
    console.log('Server started on port 3000')
})