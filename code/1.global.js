const fs = require('fs');
//require = import와 같다. 
// const fs = require()을 함으로써 이 파일이 node.js 라는 것을 알리는 것
console.log('hello');
global.console.log('hello') //node 최상위 객체
globalThis.console.log('hello')//자바스크립트에서 