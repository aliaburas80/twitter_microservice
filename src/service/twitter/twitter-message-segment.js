/*
Ali Abu Ras aliaburas80@gmail.com
*/
/*create twitter message with allowed messages*/
let shuffle       = require('./../utilies/shuffle');
let messagesArray = [];
let hashsArray    = [];
let content    = [];
let linksArray    = []
let message       = '';
let hashIndex     = 1;
let twitObj;
let tweet         = '';
let twitMaxLen    = 110;


module.exports = (twit,links,hashs,msg,cont)=>{
  // each message must be at max 140 characters
  hashsArray = shuffle(hashs.split('#'));
  content    = shuffle(cont.split(' '));
  console.log(hashsArray)
  console.log(content)
  hashsArray = hashsArray.concat(content)
  
  if(hashsArray.length <= 1){
      hashsArray=['nodejs','expressjs','aliaburas','angrycloud','twitter','@twitter','@ali_aburas'];
  }

  linksArray = links;
  message    = msg;
  twitObj    = twit;

  return createMessages(hashIndex).then(
    (data)=>{
      return data
    },(error)=>{
      console.log(error);
    });
}

let createMessages = (hashIndex)=>{
  return new Promise((resolve,error)=>{
      if((linksArray.length < 1 && hashsArray.length <= 1) || (hashsArray.length < 1)){
        messagesArray.push(message);
         resolve(messagesArray);
      }else{
        tweet=message + ' ';
        if(hashIndex >= hashsArray.length-1){
            resolve( messagesArray );
        }else{
            while( tweet.length <= twitMaxLen ){
                if(String('#'+hashsArray[hashIndex]+" ").length + tweet.length >= twitMaxLen){
                    break;
                }else{
                    tweet+=addHash(hashsArray[hashIndex])+" ";
                    hashIndex++;
                }
            }
            // for all links
            for(let link in linksArray){
                let opts = linksArray[link] + ' ' +tweet;
                messagesArray.push(opts);
            }
           
            return resolve(createMessages(hashIndex));
        }
     }
  });
}

let addHash = (message)=>{
    let msg = message;
    if(message != undefined){
        if(msg.indexOf('@')===-1){
            msg = '#'+msg
        }
    }
    return msg;
}
