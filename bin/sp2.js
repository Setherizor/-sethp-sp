#!/usr/bin/env node

// Delete the 0 and 1 argument (node and script.js)
const args = process.argv.splice(process.execArgv.length + 2)

// Retrieve the first argument
const name = args[0]

const myLibrary = require('../lib')

// Displays the text in the console
// myLibrary.say(name + ', get back here bro')
myLibrary.b('SP LIB')
