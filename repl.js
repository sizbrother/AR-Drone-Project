var arDrone = require('ar-drone');
var http = require('http');
var download = require('download-file')

var url = "http://localhost:8080/"


var options = {
    directory: "/Users/zamankhan/Desktop/data/",
    filename: "me.png"
}

console.log('Connecting png stream ...');
var pngStream = arDrone.createClient().getPngStream();


var lastPng;
pngStream
    .on('error', console.log)
    .on('data', function (pngBuffer) {
        lastPng = pngBuffer;

        });


var server = http.createServer(function (req, res) {
    if (!lastPng) {
        res.writeHead(503);
        res.end('Did not receive any png data yet.');
        return;
    }

    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(lastPng);

    download(url, options, function (err) {
        if (err) throw err
        console.log("oomf")
    })


});

server.listen(8080, function () {
    console.log('Serving latest png on port 8080 ...');
});
