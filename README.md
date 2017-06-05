# twitter_microservice
This microserivce will handel post segment of messages contaion links, hanshtags and messages to tweeter and keep message length equal or less than 140 characters.
You can add as many as you like hashtages and links and this service will manage segment messages and post them.
<p>*You should have account on <a href='https://dev.twitter.com/'>Twitter Developer</a>, to get your secret and tokens to start using this service </p>
<h1>How to use.</h1>
  <code>npm install twitter-service</code><br>
  <P>
  <code>let twitter = require('twitter-service');<br></code><br>
  <code>twitter({<br></code><br>
  <code>    "consumer_key"       :"ENTER YOUR CONSUMER KEY"       ,<br></code><br>
  <code>    "consumer_secret"    :"ENTER YOUR CONSUMER SECRET"    ,<br></code><br>
   <code>   "access_token"       :"ENTER YOUR ACCESS TOKEN"       ,<br></code><br>
   <code>   "access_token_secret":"ENTER YOUR ACCESS TOKEN SECRET"<br></code><br>
  <code>});<br></code><br>


<h2>Customiziation</h2>
  <ol>
  <li>
  <h3>Change links</h3>
    <p>Open index.js and change urls array.</p>
  </li>
  <li>
  <h3>Change tweet message.</h3>
    <p>open service/twitter/twitterManager.js, and change promise message  tweetsMessages(twit,links,hashtags,' Amazing! ')</p>
  </li>
  <li> 
  <h3>Add remove hashtages</h3>
    <p>open twitter_config/hashtages.js, do your magic.</p>
  </li>
  </ol>

  
 <h2>Dependencies</h2>
 <ol>
   <li><a href='https://www.npmjs.com/package/nconf'>nconf</a></li>
   <li><a href='https://www.npmjs.com/package/post-tweet-chain'>post-tweet-chain</a></li>
   <li><a href='https://www.npmjs.com/package/promise-while'>promise-while</a></li>
   <li><a href='https://www.npmjs.com/package/turl'>turl</a></li>
   <li><a href='https://www.npmjs.com/package/twit'>twit</a></li>
 </ol>
<h3><a href="mailto:aliaburas80@gmail.com">Ali Abu Ras</a><h3>
