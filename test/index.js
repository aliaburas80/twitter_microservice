let tw = require('twitter-service');

tw(twitter:{
    "consumer_key" :"ENTER YOUR CONSUMER KEY",
    "consumer_secret" :"ENTER YOUR CONSUMER SECRET",
    "access_token" :"ENTER YOUR ACCESS TOKEN",
    "access_token_secret":"ENTER YOUR ACCESS TOKEN SECRET"
  },
  links :{[
      'https://github.com/aliaburas80/twitter_microservice'
    ]},
  hashtags:"#github#photooftheday#photooftheday#beautiful#fashion#instagood",
  message :"Hello!"
);
