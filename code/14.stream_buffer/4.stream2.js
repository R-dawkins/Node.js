const fs = require('fs');

const wStream = fs.createWriteStream('./file3.txt',{});
wStream.write('hello~~\r\n')
wStream.write('hello~~\r\n')
wStream.end();

