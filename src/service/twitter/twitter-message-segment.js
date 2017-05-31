/*create twitter message with allowed messages*/

let messagesArray = [];
let hashsArray    = [];
let linksArray    = []
let message       = '';
let hashIndex     = 1;
let linkIndex     = 0;
let twitObj;
let tweet         ='';

module.exports = (twit,links,hashs,msg)=>{
  // each message must be at max 140 characters
  hashsArray = hashs.split('#');
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
      tweet=''
      if(hashIndex >= hashsArray.length-1){
        resolve( messagesArray );
      }else{
        while(tweet.length <= 140 ){
            if(String('#'+hashsArray[hashIndex]+" ").length + tweet.length >=140){
              break;
            }else{
              tweet+='#'+hashsArray[hashIndex]+" ";
              hashIndex++;
            }
        }
        // for all links
        for(let link in linksArray){
          let opts = {
            twit: twitObj,
            parts: [
              linksArray[link],
              message,
              tweet
            ]
          };
          messagesArray.push(opts);
        }
        return resolve(createMessages(hashIndex));
    }
  });
}
