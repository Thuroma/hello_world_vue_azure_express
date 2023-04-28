let express = require('express')
let routes = require('./routes/routes')
let path = require('path')

// Create web app
let app = express()

// Direct to dist directory
let pathToVueApp = path.join(__dirname, 'hello-vue', 'dist')
let vueApp = express.static(pathToVueApp)
app.use('/', vueApp)

// Use route we created
app.use('/api', routes)

// Listen for requests on a particular port
// If computer running server specifies port, use process.env.PORT
// Else use PORT 3000
let server = app.listen(process.env.PORT || 3000, function() {
    // Log what port the server is running on - running on 127.0.0.1:3000
    console.log('Express server running on port:', server.address().port)
})