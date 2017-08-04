/*
Ali Abu Ras aliaburas80@gmail.com
*/

/*just post tweets*/
let events = require('../../events/Event');
let postTweetChain = require('post-tweet-chain');
let index = 0;
let messages=[];
let totalDoneMessages = 0;
let totalDuplicateMessages = 0;
let twit;

//

module.exports  = (t,msg)=>{
    twit = t;
    messages = msg;
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
    twit.post('statuses/update', { status: messages[index] }, function(err, data, response) {
      if(err){
        let errorMessage = `Error number = ${err.allErrors[0].code}, ${err.allErrors[0].message}`;
        process.emit('errors',errorMessage);
        totalDuplicateMessages++;
      }else{
          process.emit('post',`${ messages[index]}`);
      }
      if(data){
        totalDoneMessages++;
      }
    logDone();
  });
}
