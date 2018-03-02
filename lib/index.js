/**
 * Displays a string in the console
 * @param {mess} String string to show in the console
 */
const say = function (mess) {
  console.log(mess)
  return mess
}

/**
 * Prints String as the banner for app
 * @param {String} m 
 */
const banner = (m) =>  require('awesome-banner').banner(m, 'doom')


// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.say = say
exports.m = () => 6
exports.b = banner
