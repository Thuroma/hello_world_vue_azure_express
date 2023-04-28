// Create object that matches requests to functions
let express = require('express')
let router = express.Router()

// Base request path - req (request from client), res (response from server)
router.get('/', function(req, res, next) {
    // Server response in json format
    res.json( { 'message': 'Hello I\'m an Azure app!' })
})

// Annother file can include or require this file. Makes router available
module.exports = router
