let tinyService = require('./src/service/tinyLink');

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
tinyService(urls).then((data)=>{console.log(data);},(error)=>{console.error(error);})
//console.log(tinyService(urls).then((data)=>{console.log(data);},(error)=>{console.log(error);}));
