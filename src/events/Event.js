const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const serviceEvents = new MyEmitter();


process.on('errors', (message) => {
    console.log(`an error occurred!  ${message}`);
});

process.on('post', (message) => {

    console.log(`an post occurred!  ${message}`);
});

module.exports = serviceEvents
