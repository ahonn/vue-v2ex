var superagent = require('superagent')
var express = require('express')

var app = express()

app.use(express.static('.'))

function getJSON(url, res) {
  var request = superagent.get(url)

  request.pipe(res)
  request.on('end', function () {
    console.log('GET: ' + url)
  })
}

app.get('/api/topics/:name', function(req, res) {
  var name = req.params.name
  var v2exUrl = 'http://v2ex.com/api/topics/'

  if (name == 'latest' || name == 'hot') {
    v2exUrl += name + '.json'
  } else {
    v2exUrl += 'show.json?node_name=' + name
  }

  getJSON(v2exUrl, res)
})

app.listen(80)
console.log('Express started on 127.0.0.1:80')