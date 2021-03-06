/*
Ali Abu Ras aliaburas80@gmail.com
*/
let tinyService    = require('./src/service/tinyLink');
let printWait      = require('./src/service/wait');
let tweeter        = require('./src/service/twitter/twitterManager');
let urls           = require('./twitter_config/links');
let tinyURLS= [];
let config;
let isDone = false;

let doPrint = ()=>{
  if(!isDone){
    printWait.doWait();
    setTimeout(doPrint,200);
  }else{
    printWait.doFinish();
  }
}

let init = ()=>{
  printWait.virtualConsole;
  doPrint();
  tinyService(config.links).then(
      (data)=>{
        isDone=true;
        tinyURLS = data;
        tweeter(tinyURLS,config);
      },(error)=>{
        console.error('Tiny url service :: '+error);
      });
}

module.exports = (twitter_config)=>{
  config = twitter_config;
  init();
}

/* // to track all events globally
process.on('post', (message) => {
    console.log(`INDEX  ${message}`);
});


process.on('errors', (message) => {
    console.log(`INDEX  ${message}`);
});
*/