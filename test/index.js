var fs = require('fs');

var Bandwidth = require('../index');

var rs = fs.createReadStream('/dev/zero');
var ws = fs.createWriteStream('/dev/null');

var bw = new Bandwidth();

bw.on('done', function(data) {
    var c = data.total_bytes/(1024 * 1024 * 1024);
    c = c.toFixed(2);
    console.log(c + 'GB');
})

bw.on('progress', function(data) {
    var c = data.bytes/(1024 * 1024 * 1024);
    c = c.toFixed(2);
    console.log(c + 'GB/s');
})

rs.pipe(bw)
  .pipe(ws);

setTimeout(function() {
    rs.unpipe(bw);
    console.log('manually close the file stream');
    bw.end();
}, 5 * 1e3);
