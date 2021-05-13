var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'https://fs.tokopedia.net',
  'path': '/inventory/v1/fs/13004/product/info?product_id=15341594',
  'headers': {
    'Authorization': 'Bearer HB8GNgfdRXS9c_sksTdTBw'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
