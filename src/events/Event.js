const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const serviceEvents = new MyEmitter();


serviceEvents.on('errors', (message) => {
    console.log(`an error occurred!  ${message}`);
});

serviceEvents.on('post', (message) => {
    console.log(`an post occurred!  ${message}`);
});

module.exports = serviceEvents
