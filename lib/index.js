exports.printMsg = () => console.log('This is a message from the demo package')
exports.m = () => 6

// --fix --no-semicolon --space"

/**
 * Displays a string in the console
 *
 * @param {mess} String string to show in the console
 */
const say = function (mess) {
  return console.log(mess)
}

// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.say = say
