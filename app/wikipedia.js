import wikipedia from 'wikipedia-js'

export default function getWikiRef (topic) {
  // Get summary of an article from Wikipedia to compare against the Feynman
  
  var options = {
    query: topic,
    format: 'html',
    summaryOnly: true
  }

  var d = new Promise (function(resolve, reject) {
    wikipedia.searchArticle(options, function(err, htmlResponse) {
      if (err) {
        reject("Couldn't get the article")
      }
      else {
        resolve(htmlResponse)
      }
    })
  })

  return d
}
