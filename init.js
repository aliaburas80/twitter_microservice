let tw = require('./index');
let hashTags = require('./twitter_config/hashtages');
tw({
    "twitter":[{
      "consumer_key"       :"A3YkKr3sEFUQqWiyTU8JafhO2",
      "consumer_secret"    :"xRY5xHk9XyNQ5xYhYRFK86PrJJeiYfLQoIlkoLQhBMzSIqTuW5",
      "access_token"       :"234758171-0QKCDeirbEH9ulR3IOgdpihIKI9HwpUOl08pgaS3",
      "access_token_secret":"UU9HU3NuL894GbS4b8STtUKad3mx0Iny7EaMePVsKwUQl"
    }],
    "links" :['https://www.youtube.com/watch?v=VAANQTY3mzo'],
    "hashtags":hashTags.hashtagesArray,
    "content" :hashTags.content,
    "message" :"Like, share and subscribe !  "
});


// process.emit('stopPost')
