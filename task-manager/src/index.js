// starting point for our application - here we initialize the express server

const express = require('express')
// requiring the mongoose file makes sure that mongoose runs and that mongoose connects to the database
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// get all users in db
app.get('/users', (req, res) => {
    // we use the mongoose find method to get multiple documents at once
    // if we leave find empty it'll fetch everything. we can also put json in there to filter- User.find({ name: 'Molly' })
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send(S)
    })
})

// get an individual user by ID
app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        // note: .then() will be triggered even if there's no user with that id in the db. we only throw an error if the server fails to respond correctly
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)

    }).catch((e) => {
        res.status(500).send(e)
    })
})

// get all tasks in db
app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

// get an individual task by id
app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)

    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})