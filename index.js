let tinyService = require('./src/service/tinyLink');
let printWait = require('./src/service/wait');

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
  consumer_key:         '9cQWIozM5Kg9T9hqmq4fs2VeZ',
  consumer_secret:      '5mCW4tcSX8dAE2R9dCUOCNac4Bcg1jivJju9STvJAqMnngy11z',
  access_token:         '234758171-OKUq3q22KtVUl48oqELbBAPchyhGeANcbSFyqTtI',
  access_token_secret:  'Yo1EKGmCenLUG7medCETtadiEvoQceQltfIyOTFg3wp4F'
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
