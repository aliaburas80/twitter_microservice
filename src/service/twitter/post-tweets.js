/*
Ali Abu Ras aliaburas80@gmail.com
*/
let index = 0;
let messages=[];
let totalDoneMessages = 0;
let totalDuplicateMessages = 0;
let twit;
let accountIndex = 0;
let twitArr=[];

module.exports  = (t,msg)=>{
    twitArr = t;
    twit = twitArr[accountIndex];
    messages = msg;
    console.log('Post messages');
    postTweet();
}

let logDone = ()=> {
  index++;
  if(index>=messages.length){
    console.log('Totale done posts          '+( totalDoneMessages - totalDuplicateMessages ));
    console.log('Totale duplicate messages  '+ totalDuplicateMessages);
    return;
  }
  postTweet();
}

let postTweet = ()=>{
    let overDailyStatus=false;
    console.log( messages[index]);
    twit.post('statuses/update', { status: messages[index] }, function(err, data, response) {
      if(err){
        console.log(err.message + '  ' +JSON.stringify(err.allErrors[0]) + err.allErrors[0].code);
        if(String(err.allErrors[0].code) === '185'){
          console.log('This service will hold for one houre!');
          waitForHoure();
          return;
        }else{
            overDailyStatus = true;
            totalDuplicateMessages++;
        }
      }
      if(data){
        totalDoneMessages++;
      }
    if(!overDailyStatus){
      logDone();
    }
  });
}


let waitForHoure = ()=>{
     let d = new Date(),
         h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1, 0, 0, 0),
         e = h - d;
     setTimeout(postTweet, e);
     console.log('Please wait until one houre to resend new messages stream.');
}
