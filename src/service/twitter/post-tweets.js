/*just post tweets*/
let postTweetChain = require('post-tweet-chain');
let index = 0;

module.exports  = (messages)=>{
    console.log('Message-> '+messages);
    postTweetChain(messages[index], logDone);
}

let logDone = (error)=> {
  if (error) {
    console.log('length-> '+error);
  }
  else {
    console.log('done!');
    index++;
    postTweetChain(messages[index], logDone);
  }
}
