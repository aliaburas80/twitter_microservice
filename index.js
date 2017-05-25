const turl = require('turl');
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


for (let link of urls) {
    turl.shorten(link).then(
            (res) => {
                console.log(res);
            }
        ).catch((err) => {
            console.log(err);
    });
}


