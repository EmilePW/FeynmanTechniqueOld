export default function getWikiRef (topic) {
  // Get summary of an article from Wikipedia to compare against the Feynman
  let d = new Promise (function(resolve, reject) {
    let req = new XMLHttpRequest()

    req.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json')
    req.send()

    req.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(this.response)
      }
      else {
        reject('Request failed')
      }
    }
  }).then((data) => {
    console.log(data)
  })

  return d
}

getWikiRef()
