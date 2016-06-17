function calculateReadingAge (text) {
  let terminalPunctuation = /\.+|\?+|!+/

  let characters = text.split('').filter((char) => /\w/.test(char))
  let words = text.split(' ')
  let sentences = text.split(terminalPunctuation).slice(0, -1)

  return 4.71 * (characters.length / words.length) + 0.5 * (words.length / sentences.length) - 21.43
}
