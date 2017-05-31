/*Mange connection and be ready to send messages*/
let nconf = require('nconf');
let hashtags = require('./../../../twitter_config/hashtages');
let tweetsMessages = require('./twitter-message-segment');
let Twit = require('twit');
let postTweets  = require('./post-tweets');

let twit;
module.exports  = (links)=>{
  // git twitter configrations
  nconf.argv().env();
  nconf.file({ file: './twitter_config/config.json' });
  createTwitterInstance();
  // must now prepearing twitter message, and return array of objects
  tweetsMessages(twit,links,hashtags,' Check out these applications ').then(
    (data)=>{
      postTweets( data  );
    },(error)=>{
      console.log(error);
    });
  // when its finished then, send tweets
}

let createTwitterInstance = ()=>{
  twit = new Twit({
    consumer_key:         nconf.get('consumer_key'),
    consumer_secret:      nconf.get('consumer_secret'),
    access_token:         nconf.get('access_token'),
    access_token_secret:  nconf.get('access_token_secret')
  });
}




/*





let sendTweet = ()=>{
  for(let link of tinyURLS){

    let opts1 = {
      twit: twit,
      parts: [
        link,
        '#muisc #army #jordan #new_year'
      ]
    };
    let opts2 = {
      twit: twit,
      parts: [
        link,
        '#sadmah #+18 #what #kids #learn'
      ]
    };

      postTweetChain(opts1, logDone);
      postTweetChain(opts2, logDone);

    }
}



 let logDone = (error)=> {
  if (error) {
    console.log(error);
  }
  else {
    console.log('All done!');
  }
}

*/
