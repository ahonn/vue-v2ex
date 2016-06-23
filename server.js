var superagent = require('superagent');
var express = require('express');
var app = express();

app.use(express.static('.'));

function getData(res, url) {
  var sreq = superagent.get(url);

  sreq.pipe(res);
  sreq.on('end', function(){
      console.log('Done => ' + url);
  });
}

app.get('/api/topics/:id', function (req, res) {
    var id = req.params.id;

    if (id == 'latest' || id == 'hot') {
      var url = 'http://v2ex.com/api/topics/' + id + '.json'
    } else {
      var url = 'http://v2ex.com/api/topics/show.json?id='+ id
    }

    getData(res, url);
});

app.get('/api/nodes/:id', function (req, res) {
    var id = req.params.id;

    if (id == 'all') {
      var url = 'http://v2ex.com/api/nodes/' + id + '.json'
    } else {
      var url = 'http://v2ex.com/api/topics/show.json?node_id='+ id
    }

    getData(res, url);
});

app.get('/api/replies/:id', function (req, res) {
    var id = req.params.id;
    var url = 'http://v2ex.com/api/replies/show.json?topic_id='+ id

    getData(res, url);
});

app.listen(80);
console.log('Express started on 127.0.0.1:80');
