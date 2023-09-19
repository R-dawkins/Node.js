const os = require('os');
console.log(os.EOL === '\n');//맥, 리눅스
console.log(os.EOL === '\r\n');//윈도우
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.type());
console.log(os.cpus());
console.log(os.uptime());

