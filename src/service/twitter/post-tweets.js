/*just post tweets*/
let postTweetChain = require('post-tweet-chain');
let index = 0;
let messages=[];
module.exports  = (msg)=>{
    messages = msg;
    postTweetChain(messages[index], logDone);
}

let logDone = (error)=> {
  if (error) {
    console.log('Error code: '+error.code+' status code '+error.statusCode);
  }
  else {
    console.log('done!');
  }
  index++;
  if(index>=messages.length) return;
  setTimeout(()=>{
    postTweetChain(messages[index], logDone);
  },1000);
}
