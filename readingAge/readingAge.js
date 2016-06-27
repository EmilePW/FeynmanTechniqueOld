var terminalPunctuation = /\.+|\?+|!+/

var topFiveThousandWords = require(__dirname + '/top5000Words')

topFiveThousandWords = topFiveThousandWords.map(function(rank) { return rank["Word"] })

function readingAge (text) {
  // Calculates accorign to the Gunning-Fog Readability Score

  if (!text)
    return false

  var words = text.split(' ').map(function (word) { return word.replace(/[^\w|^'|^-]/g, '') }),
      sentences = terminalPunctuation.test(text) ? text.split(terminalPunctuation).slice(0, -1) : [text],
      rarerWords = words.filter(function (word) { return topFiveThousandWords.indexOf(word.toLowerCase()) < 0 })

  return Math.floor(0.4 * ((words.length / sentences.length) + 50 * (rarerWords.length / words.length)))
}

module.exports = readingAge
