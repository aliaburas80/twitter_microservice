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
       turl.shorten(arrOfLinks[index]).then(
               (res) => {
                 if(index === arrOfLinks.length){
                   resolve(tinyLinks)
                 }else{
                   index++;
                   tinyLinks.push(res);
                   resolve(getAllTinLinks(arrOfLinks))
                 }
               }
           ).catch(
             (err) => {
               console.log(err);
             }
         );
   })

}
