// express is a function, not an object
// we call it to create a new application
const path = require('path')
const express = require('express')

const public_dir_path = path.join(__dirname, '../public')

const app = express()

// static takes the path to the folder we want to serve up
app.use(express.static(public_dir_path))

// we have one domain, and it's all going to run on
// a single express server
// we have multiple routes though, i.e. the different pages for the site
// imagine we own app.com
// app.com/help
// app.com/about

// this lets us configure what the server should do when someone tries to go to a certain page (url)
// get takes two args. the first is the route we want, so like '' for home, or 'about' for site.com/about
// the second arg is a function that's what to do when someone tries to go there, i.e. what to send back to them
// this function always gets called with two arguments, request (req) and response (res)
// req is an obj containing information about the incoming request to the server
// res contains a bunch of methods allowing us to customize what we're going to send back to the requester

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cold as shit',
        location: 'Seattle'
    })
})

// starts up server and has it listen on a specific port
// 3000 is a common development port. http is port 80
// listen has a second optional argument, which is a callback function that runs when the server starts. it's async
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})