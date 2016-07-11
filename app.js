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
  var v2exUrl = 'http://v2ex.com/api/topics/' + name + '.json'

  getJSON(v2exUrl, res)
})

app.get('/api/topic/:id', function (req, res) {
  var id = req.params.id
  var v2exUrl = 'http://v2ex.com/api/topics/show.json?id='+ id

  getJSON(v2exUrl, res)
})

app.listen(80)
console.log('Express started on 127.0.0.1:80')