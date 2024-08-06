var arDrone = require('ar-drone');
var client = arDrone.createClient();
var fs = require('fs');

var pngStream = client.getPngStream();
var count = 0;
var period = 7000
var buffer = 0;

pngStream

  .on('error', console.log)
  .on('data', function(pngBuffer) {

    var timer = (new Date()).getTime();

    if (timer - buffer > period) {

      count++;
      buffer = timer;
      console.log('Going to save frame now');


      fs.writeFile('frame' + count + '.png', pngBuffer, function(err) {

        if (err) {
          console.log('Could not save PNG: ' + err);
        }
      });
    }
  });
