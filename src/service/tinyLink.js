/*
Ali Abu Ras aliaburas80@gmail.com
*/
/* Create tinylinks */
const promiseWhile = require('promise-while')(Promise);
const turl = require('turl');
let tinyLinks =[];

module.exports = ( arrOfLinks )=>{

    return new Promise((resolve,faile)=>{
        getAllTinLinks(arrOfLinks).then(
        (data)=> {resolve(data)},
        (error)=>{faile((error))})
});
}

let index = 0;
let getAllTinLinks = (arrOfLinks)=>{
    return new Promise ((resolve, reject) => {
        if(arrOfLinks.length<=1){
        console.log(' 1 ');
        tinyLinks =[' '];
        console.log(' 2 ');
        resolve(tinyLinks);
    }else{
        turl.shorten(arrOfLinks[index]).then(
            (res) => {
            if(index === arrOfLinks.length){
            resolve(tinyLinks)
        }else{
            index++;
            tinyLinks.push(res);
            resolve(getAllTinLinks(arrOfLinks))
        }
    },
        (error)=>{
            console.log(error);
        }
    ).catch(
            (err) => {
            console.log('[ERROR!]');
        console.log(err);
    }
    );
    }

})

}
