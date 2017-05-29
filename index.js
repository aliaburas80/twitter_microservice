let tinyService    = require('./src/service/tinyLink');
let printWait      = require('./src/service/wait');
let config         = require('./src/service/nconf')
let postTweetChain = require('post-tweet-chain');
let Twit = require('twit');
let tinyURLS= [];
let urls = [
    'https://www.youtube.com/watch?v=_ZCugrsIRjs',
    'https://www.youtube.com/watch?v=_ZCugrsIRjs',
    'https://www.youtube.com/watch?v=pTO_gp02vZU',
    'https://www.youtube.com/watch?v=InN0LUdSi2Q',
    'https://www.youtube.com/watch?v=mFyiONtTKNw',
    'https://www.youtube.com/watch?v=SZnRH2vb1OU',
    'https://www.youtube.com/watch?v=MzNIszbVz4s',
    'https://www.youtube.com/watch?v=mcOVzCYPuFM&t=5'
    ];

let isDone = false;
let nconf = require('nconf');

nconf.argv().env();
nconf.file({ file: './config/config.json' });


let doPrint = ()=>{
  if(!isDone){
    printWait.doWait();
    setTimeout(doPrint,200);
  }else{
    doFinish();
  }
}

let doFinish = ()=>{
  printWait.doFinish();
}




printWait.virtualConsole;
doPrint();
tinyService(urls).then(
    (data)=>{
      isDone=true;
      console.log('\n');
      console.log(data);
      tinyURLS = data;
      sendTweet();
    },(error)=>{
      console.error(error);
    });



let twit = new Twit({
  consumer_key:         nconf.get('consumer_key'),
  consumer_secret:      nconf.get('consumer_secret'),
  access_token:         nconf.get('access_token'),
  access_token_secret:  nconf.get('access_token_secret')
});

let sendTweet = ()=>{
  for(let link of tinyURLS){

    let opts1 = {
      twit: twit,
      parts: [
        link,
        'رمضان كريم',
        '#عيد_الاستقلال #independence71 #الاستقلال٧۱ #حب_الاردن@JordanFA @TheAFDP @FilmJordan'
      ]
    };
    let opts2 = {
      twit: twit,
      parts: [
        link,
        'رمضان كريم',
        '#أردني_يازين_الهوية #الأردن #القوات_المسلحة_الأردنية #الجيش_العربي #امانة_عمان @RadioHalaJO'
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

//console.log(tinyService(urls).then((data)=>{console.log(data);},(error)=>{console.log(error);}));
