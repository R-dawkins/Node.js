const fs = require('fs');
//promise : rename(old, new)
//callback : rename(old, new, callback)
//synchronous : renameSync(old, new)

// fs.rename('./test.txt',)


//synchronous ---------------------------------
/* try {
  fs.renameSync('./test.txt','./test-new.txt') //block 방식 (동기식)
  console.log('-- rename success --');
  
} catch (error) {
  console.log('-- error --');
  console.log(error);
}
console.log('--- test!!! ---'); */

// callback -----------------------------------
/* fs.rename('./test-new.txt','./test.txt',(result)=>{
  console.log('change!!');
  console.log(result);
}) */

//promise--------------------------------------
fs.promises.rename('./test-new.txt','./test.txt',)
.then(()=>{
  console.log(('-- rename complte'));
}
)
.catch(console.error)
.finally(()=>{
  console.log('-- terminate');
})