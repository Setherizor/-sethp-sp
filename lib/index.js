/**
 * Displays a string in the console
 * @param {mess} String string to show in the console
 */
const say = function (mess) {
  console.log(mess)
  return mess
}

// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.say = say
exports.m = () => 6
