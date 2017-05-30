let tinyService    = require('./src/service/tinyLink');
let printWait      = require('./src/service/wait');
let tweeter        = require('./src/service/twitter/twitterManager')
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
// load configrations file.



// let nconf = require('nconf');
// nconf.argv().env();
// nconf.file({ file: './twitter_config/config.json' });

// this wait for create tiniy links
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
      tinyURLS = data;
      sendTweet();
    },(error)=>{
      console.error(error);
    });


//
// let twit = new Twit({
//   consumer_key:         nconf.get('consumer_key'),
//   consumer_secret:      nconf.get('consumer_secret'),
//   access_token:         nconf.get('access_token'),
//   access_token_secret:  nconf.get('access_token_secret')
// });

let sendTweet = ()=>{
  tweeter(tinyURLS);
  // for(let link of tinyURLS){
  //
  //   let opts1 = {
  //     twit: twit,
  //     parts: [
  //       link,
  //       '#muisc #army #jordan #new_year'
  //     ]
  //   };
  //   let opts2 = {
  //     twit: twit,
  //     parts: [
  //       link,
  //       '#sadmah #+18 #what #kids #learn'
  //     ]
  //   };
  //
  //     postTweetChain(opts1, logDone);
  //     postTweetChain(opts2, logDone);
  //
  //   }
}


//
//  let logDone = (error)=> {
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log('All done!');
//   }
// }

//console.log(tinyService(urls).then((data)=>{console.log(data);},(error)=>{console.log(error);}));
