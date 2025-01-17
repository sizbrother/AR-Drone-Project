var arDrone = require('ar-drone');
var PaVEParser = require('../lib/video/PaVEParser');
var output = require('fs').createWriteStream('/Users/zamankhan/Desktop/vid.h264');

var video = arDrone.createClient().getVideoStream();
var parser = new PaVEParser();

parser
    .on('data', function (data) {
        output.write(data.payload);
    })
    .on('end', function () {
        output.end();
    });

video.pipe(parser);