let express = require('express');
let app     = express();
let port = process.env.PORT || 3000;

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
  res.send('Hello in Twitter Service!');
});

app.get('/sendTweets',(req,res)=>{
  let params = {
    tweetConfig : req.param('config'),// obj
    message     : req.param('message'), // string
    hashtags    : req.param('hashtags'), // string
    links       : req.param('links') // string splited with ,
  };

  let values='';
  for( let ob in params){
    console.log(ob+'   '+params[ob]);
  }
  console.log(req.param);
  res.send('check tweet messages');

});

app.listen(port,()=>{
  console.log('localhost: '+port);
})
