/*
Ali Abu Ras aliaburas80@gmail.com
*/
/*Mange connection and be ready to send messages*/
let nconf          = require('nconf');
//let hashtags       = require('./../../../twitter_config/hashtages');
let tweetsMessages = require('./twitter-message-segment');
let Twit           = require('twit');
let postTweets     = require('./post-tweets');
let twit;
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
      postTweets(twit,data);
    },(error)=>{
      console.log(error);
    });
  // when its finished then, send tweets
}

let createTwitterInstance = ()=>{
  twit = new Twit({
    consumer_key:         config.twitter.consumer_key,
    consumer_secret:      config.twitter.consumer_secret,
    access_token:         config.twitter.access_token,
    access_token_secret:  config.twitter.access_token_secret,
    timeout_ms:           60*1000
  });
}
