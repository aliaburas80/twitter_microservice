# twitter_microservice
Create microservice to manage text messages by create tinylinks and concatenate them messages with number of hashtags to meet 140 character at max.
You can add as many you like hashtages and links and this service will manage segment messages and post them to tweeter.
---------------------------------------------------------------------------------------------------------------------------------
How to use.
  1.npm install
  2.npm start


-Customiziation 
  1. Change links. 
    |-> Open index.js and change urls array.
  2. Change tweet message.
     |-> open service/twitter/twitterManager.js, and change promise message  tweetsMessages(twit,links,hashtags,' Amazing! ').
  3. Add remove hashtages
     |-> open twitter_config/hashtages.js, do your magic.
---------------------------------------------------------------------------------------------------------------------------------
This service create by Ali Abu Ras
aliaburas80@gmail.com
