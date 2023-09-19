const path = require('path');
console.log(__dirname); //global에 있는 디렉토리 -현재 폴더의 절대경로
console.log(__filename); //global에 있는 파일 - 현재 실행파일의 절대경로
console.log(path.sep); //경로구분자 - 기억해두기
console.log(path.delimiter); //환경변수 구분자



//basename
console.log(path.basename(__filename)); // 현재 실행 파일의 절대경로에서 파일 이름만
console.log(path.basename(__dirname)); // 폴더이름만

//dirname
console.log(path.dirname(__dirname)); //부모폴더까지만

//extension
console.log(path.extname(__filename)); // 파일 확장자만

//parse 알아두기
const parsed = path.parse(__filename); //오브젝트(객체) 형태로 출력
console.log(parsed);
console.log(parsed.root);
console.log(parsed.dir);
console.log(parsed.name);
console.log(parsed.ext);
console.log(parsed.base);
const str = path.format(parsed); //string 형태로 변환
console.log(str);

// normalize 
console.log(path.normalize('./forder//////////////sub'));

//path.dirname + '/image' (사용 X)
//되도록이면 join쓰고 +(접합연산자) string같은 것은 하지 않기
//join
console.log(__dirname + '/' +'image');
console.log(__dirname + path.sep + 'image');
//현재 운영체제에 따라 경로구분자가 부여됨
console.log(path.join('/foo','bar','baz/dev'));
console.log(path.join(__dirname,'image')); //자동으로 운영체제에 따라 경로구분자 부여하고 image경로 붙여짐