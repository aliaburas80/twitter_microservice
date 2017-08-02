let Twit           = require('twit');
let twit;
module.exports = (obj)=>{
  return new Promise((success,faile)=>{
    twit = new Twit({
      consumer_key:         obj.consumer_key,
      consumer_secret:      obj.consumer_secret,
      access_token:         obj.access_token,
      access_token_secret:  obj.access_token_secret,
      timeout_ms:           60*1000
    });
    success(twit);
  });
};
