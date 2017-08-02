let tw = require('./index');
let hashTags = require('./twitter_config/hashtages');
tw({
    "twitter":[{
      "consumer_key"       :"",
      "consumer_secret"    :"",
      "access_token"       :"",
      "access_token_secret":""
    }],
    "links" :['http://tinyurl.com/y9keugnf'],
    "hashtags":hashTags,
    "message" :" "
});
