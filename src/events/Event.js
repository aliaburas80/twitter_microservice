const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const serviceEvents = new MyEmitter();
let allowPost = true;

process.on('errors', (message) => {
    console.log(`an error occurred!  ${message}`);
});

process.on('post', (message) => {
    console.log(`an post occurred!  ${message}`);
});

process.on('stopPost', (message) => {
    allowPost = false;
    console.log('stop post');
});

module.exports = allowPost;
