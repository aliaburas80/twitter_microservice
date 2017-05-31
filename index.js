let tinyService    = require('./src/service/tinyLink');
let printWait      = require('./src/service/wait');
let tweeter        = require('./src/service/twitter/twitterManager');
let urls           = require('./twitter_config/links');
let tinyURLS= [];

let isDone = false;

let doPrint = ()=>{
  if(!isDone){
    printWait.doWait();
    setTimeout(doPrint,200);
  }else{
    printWait.doFinish();
  }
}

printWait.virtualConsole;
doPrint();
tinyService(urls).then(
    (data)=>{
      isDone=true;
      tinyURLS = data;
      tweeter(tinyURLS);
    },(error)=>{
      console.error('Tiny url service :: '+error);
    });
