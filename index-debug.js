/*
 * Primary file for the API
 */

// Dependencies
var server = require('./lib/server')
var workers = require('./lib/workers')
var cli = require('./lib/cli')
var exampleDebuggingProblem = require('./lib/exampleDebuggingProblem')

debugger
// Declare the app
var app = {}
debugger
// Init function
app.init = function() {
    // Start the server
    debugger
    server.init()
    debugger
    // Start the workers
    workers.init()
    debugger
    // Start the CLI, but make sure it starts last
    setTimeout(function() {
        cli.init()
    }, 50)
    debugger

    // Call the init script that will throw
    exampleDebuggingProblem.init()
    debugger
}

//  Execute
app.init()

// Export the app
module.exports = app
