# twitter_microservice
Create microservice to manage text messages by create tinylinks and concatenate them messages with number of hashtags to meet 140 character at max.
You can add as many you like hashtages and links and this service will manage segment messages and post them to tweeter.
---------------------------------------------------------------------------------------------------------------------------------
<h1>How to use.</h1>
  <strong>npm install</strong><br>
  <strong>npm start</strong>


<h2>-Customiziation</h2>
  1. Change links. <br>
    |-> Open index.js and change urls array.<br>
  2. Change tweet message.<br>
     |-> open service/twitter/twitterManager.js, and change promise message  tweetsMessages(twit,links,hashtags,' Amazing! ').<br>
  3. Add remove hashtages<br>
     |-> open twitter_config/hashtages.js, do your magic.<br>
---------------------------------------------------------------------------------------------------------------------------------
<h3>This service create by Ali Abu Ras<h3>
<a href='mailto:aliaburas80@gmail.com>aliaburas80@gmail.com</a>
