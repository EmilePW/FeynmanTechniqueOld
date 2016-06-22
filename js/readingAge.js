function calculateReadingAge (text) {
  if (!text) {
    return false
  }

  // Calculates automated readability index
  var terminalPunctuation = /\.+|\?+|!+/

  var characters = text.split('').filter((char) => /\w/.test(char))
  var words = text.split(' ')
  var sentences =  terminalPunctuation.test(text) ? text.split(terminalPunctuation).slice(0, -1) : [text]

  return Math.floor(4.71 * (characters.length / words.length) + 0.5 * (words.length / sentences.length) - 21.43)
}

module.exports = calculateReadingAge
