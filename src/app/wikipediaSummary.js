let getWikiSummary = (topic, callback) => {
  // Format topic to be the same as the wikipedia uri
  let capAndUnderscore = (words) => {
    words = words.toLowerCase().split(' ')
    words[0] = words[0].split('')
    words[0][0] = words[0][0].toUpperCase()
    words[0] = words[0].join('')
    return words.join('_')
  }

  let formattedTopic = capAndUnderscore(topic)

  // standard uri without topic
  let wikipediaURI = 'https://simple.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles='

  let d = new Promise((resolve, reject) => {
    let req = new XMLHttpRequest()
    req.open('GET', wikipediaURI + formattedTopic)

    req.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(this.response)
      }
      else {
        reject('Topic not found in wikipedia, check the spelling, otherwise it doesn\'t exist')
      }
    }

    req.onerror = function (err) {
      reject(err)
    }

    req.send()
  })

  d.then(
    (response) => {
      response = JSON.parse(response)
      let pages = response.query.pages
      let summary = pages[Object.keys(pages)[0]].extract

      return callback(summary)
    }
  ).catch(
    (error) => {
      console.log(error)
      return callback(error)
    }
  )
}

export default getWikiSummary
