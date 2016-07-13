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

app.get('/api/topic/:id', function (req, res) {
  var id = req.params.id
  var v2exUrl = 'http://v2ex.com/api/topics/show.json?id='+ id

  getJSON(v2exUrl, res)
})

app.get('/api/replies/:id', function (req, res) {
  var id = req.params.id;
  var v2exUrl = 'http://v2ex.com/api/replies/show.json?topic_id='+ id

  getJSON(v2exUrl, res)
});

app.get('/api/node/:name', function (req, res) {
  var name = req.params.name

  if (name == 'all') {
    var v2exUrl = 'http://v2ex.com/api/nodes/all.json'
  } else {
    var v2exUrl = 'http://v2ex.com/api/topics/show.json?node_id=' + name
  }

  getJSON(v2exUrl, res)
})

app.listen(80)
console.log('Express started on 127.0.0.1:80')