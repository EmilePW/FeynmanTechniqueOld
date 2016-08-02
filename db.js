var pg = require('pg')

var client = new pg.Client()

client.connect(function (err) {
  if (err)
    console.log(err)
  else
    console.log('connected!')
})