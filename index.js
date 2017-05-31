let tinyService    = require('./src/service/tinyLink');
let printWait      = require('./src/service/wait');
let tweeter        = require('./src/service/twitter/twitterManager')
let tinyURLS= [];
let urls = [
    'https://www.youtube.com/watch?v=_ZCugrsIRjs',
    'https://www.youtube.com/watch?v=_ZCugrsIRjs',
    'https://www.youtube.com/watch?v=pTO_gp02vZU',
    'https://www.youtube.com/watch?v=InN0LUdSi2Q',
    'https://www.youtube.com/watch?v=mFyiONtTKNw',
    'https://www.youtube.com/watch?v=SZnRH2vb1OU',
    'https://www.youtube.com/watch?v=MzNIszbVz4s',
    'https://www.youtube.com/watch?v=mcOVzCYPuFM&t=5'
    ];

let isDone = false;

let doPrint = ()=>{
  if(!isDone){
    printWait.doWait();
    setTimeout(doPrint,200);
  }else{
    doFinish();
  }
}

let doFinish = ()=>{
  printWait.doFinish();
}
printWait.virtualConsole;
doPrint();
tinyService(urls).then(
    (data)=>{
      isDone=true;
      tinyURLS = data;
      sendTweet();
    },(error)=>{
      console.error(error);
    });

let sendTweet = ()=>{
  tweeter(tinyURLS);
}
