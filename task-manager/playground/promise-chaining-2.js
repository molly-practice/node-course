require('../src/db/mongoose')
const Task = require('../src/models/task')

// a task ID: 60ac5d58b3b467392c2c975

Task.findByIdAndDelete('60ac5d58b3b467392c2c975e').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((sum) => {
    console.log('Number of incomplete tasks: ' + sum)
}).catch((e) => {
    console.log(e)
})