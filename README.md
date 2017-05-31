# twitter_microservice
Create microservice to manage text messages by create tinylinks and concatenate them messages with number of hashtags to meet 140 character at max.
You can add as many you like hashtages and links and this service will manage segment messages and post them to tweeter.
---------------------------------------------------------------------------------------------------------------------------------
<h1>How to use.</h1>
  <strong>npm install</strong><br>
  <strong>npm start</strong>


<h2>-Customiziation</h2>
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
   <li><a href='https://www.npmjs.com/package/nconf'>nconf</a><li>
   <li><a href='https://www.npmjs.com/package/post-tweet-chain'>post-tweet-chain</a><li>
   <li><a href='https://www.npmjs.com/package/promise-while'>promise-while</a><li>
   <li><a href='https://www.npmjs.com/package/turl'>turl</a><li>
   <li><a href='https://www.npmjs.com/package/post-tweet-chain'>post-tweet-chain</a><li>
 </ol>
---------------------------------------------------------------------------------------------------------------------------------
<h3><a href="mailto:aliaburas80@gmail.com">Ali Abu Ras</a><h3>
