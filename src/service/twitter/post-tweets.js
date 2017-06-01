/*
Ali Abu Ras aliaburas80@gmail.com
*/

/*just post tweets*/

let postTweetChain = require('post-tweet-chain');
let index = 0;
let messages=[];
let totalDoneMessages = 0;
let totalDuplicateMessages = 0;
let twit;
module.exports  = (t,msg)=>{
    twit = t;
    messages = msg;
    console.log('Post messages');
    postTweet();
}

let logDone = ()=> {
  index++;
  if(index>=messages.length){
    console.log('Totale done posts          '+( totalDoneMessages - totalDuplicateMessages ));
    console.log('Totale duplicate messages  '+ totalDuplicateMessages);
    return;
  }
  postTweet();
}

let postTweet = ()=>{
    console.log( messages[index]);
    twit.post('statuses/update', { status: messages[index] }, function(err, data, response) {
      if(err){
        console.log(err.message + '  ' +JSON.stringify(err.allErrors[0]));
        totalDuplicateMessages++;
      }
      if(data){
        totalDoneMessages++;
      }
    logDone();
  });
}
