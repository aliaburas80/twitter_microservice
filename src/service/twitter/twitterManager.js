/*
Ali Abu Ras aliaburas80@gmail.com
*/
let nconf          = require('nconf');
let tweetsMessages = require('./twitter-message-segment');
let postTweets     = require('./post-tweets');
let twit           = require('./tweetObject');
let twitArr=[];

let config;
module.exports  = (links,con)=>{
  console.log('twitter manager!');
  config = con;
  hashtags = config.hashtags
  // git twitter configrations
  nconf.argv().env();
  nconf.file({ file: './twitter_config/config.json' });
  createTwitterInstance();
  // must now prepearing twitter message, and return array of objects
  tweetsMessages(twit,links,hashtags,config.message).then(
    (data)=>{
      postTweets(twitArr,data);
    },(error)=>{
      console.log(error);
    });
  // when its finished then, send tweets
}
let index=0;
let createTwitterInstance = ()=>{
    twit(config.twitter[index]).then((value)=>{
      twitArr.push(value);
      index++;
      if(index === config.twitter.length){
        return;
      }
      createTwitterInstance();
    })
}
