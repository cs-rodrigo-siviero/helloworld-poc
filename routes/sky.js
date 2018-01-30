var express = require('express');
var router = express.Router();

var Client = require('node-rest-client').Client;
var client = new Client();

/* GET home page. */
router.get('/', function(req, res, next) {
  client.get("http://gturnquist-quoters.cfapps.io/api/random", function (data, response) {
      var quote = data.value.quote;
      res.send(quote);
  });
});

module.exports = router;
