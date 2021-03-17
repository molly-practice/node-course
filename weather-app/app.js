// api access key to weatherstack: cdacee4fddb8365ba7fec832720c9f13

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const process = require('process')

const address = process.argv[2]

if(!address) {
    console.log('Please provide an address.')
} else {
    // either error XOR data is populated. the other is undefined
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}