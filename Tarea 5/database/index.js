const connect = require('./connect')
const database = require('./database')

module.exports = {
    connect,
    db: database
}