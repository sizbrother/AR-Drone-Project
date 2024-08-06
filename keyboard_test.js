const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

var arDrone = require('ar-drone');
var client = arDrone.createClient();

process.stdin.on('keypress', (str, key) => {
    if (key.name == 't') {
        console.log('taking off');
        client.takeoff();

    } else if (key.name == 'w') {
        console.log('moving forward')
        client.front(0.1);

    } else if (key.name == 'a') {
        console.log('turning left');
        client.left(0.2);

    } else if (key.name == 'd') {
        console.log('turning right');
        client.right(0.2);


    } else if (key.name == 'o') {
        console.log('going up');
        client.up(1);

    } else if (key.name == 'l') {
        console.log('going down');
        client.down(0.8);

    } else if (key.name == 'i') {
        console.log('turning left');
        client.counterClockwise(1);

    } else if (key.name == 'p') {
        console.log('turning right');
        client.clockwise(1);


    } else if (key.name == 's') {
        console.log('stop');
        client.stop();

    } else if (key.name == 'z') {
        console.log('landing');
        client.land();

    } else if (key.name == '1') {
        console.log('flip');
        client.animate('flipLeft', 1000);
    }
});
console.log('Press any key...');
