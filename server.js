const express = require('express')
const bodyParser = require('body-parser')

//create the actual express app
const app = express()
app.use(bodyParser.urlencoded())

//when should happen when the browser makes a GET request
//location: '/'
//callback function: what happens when the route gets visited
//__dirname: the directory name no matter if the server is running locally or via a cloud
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')//sending an html file to the browser
})

app.post('/index.html', function(req, res) {
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result = num1 + num2
    res.send(`The result of the calculation is: ${result}`)
})

//listen on a specific port: 3000
app.listen(3000, function() {
    console.log('Server started on port 3000')
})