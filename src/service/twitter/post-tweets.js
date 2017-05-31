/*just post tweets*/
let postTweetChain = require('post-tweet-chain');
let index = 0;
let messages=[];
let totalDoneMessages = 0;
let totalDuplicateMessages = 0;
module.exports  = (msg)=>{
    messages = msg;
    console.log('Post messages');
    postTweetChain(messages[index], logDone);
}

let logDone = (error)=> {
  if (error) {
    console.log('Error code: '+error.code+' status code '+error.statusCode);
    totalDuplicateMessages++;
  }
  else {
    totalDoneMessages++;
    console.log('done! messages '+totalDoneMessages);
  }
  index++;
  if(index>=messages.length){
    console.log('Totale done posts          '+ totalDoneMessages);
    console.log('Totale duplicate messages  '+ totalDuplicateMessages);
    return;
  }
  setTimeout(()=>{
    postTweetChain(messages[index], logDone);
  },1000);
}
