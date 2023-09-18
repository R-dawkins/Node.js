console.log('logging...');

//log level
console.log('log');
console.info('info');//파라미터 사용법, 순서 정보표시
console.warn('warn');//파라미터를 잘못 실행할 가능성이 있다는 경고표시
console.error('error');//에러가 났을때 에러표시
//콘솔에 찍히는 로그를 보는 용도 브라우저에서 구분됨 노드에선 구분되지않음
//개발서버에서 커뮤니케이션 용도로 사용
//개발서버에서만 사용--배포서버에서는 삭제해야함
// console.clear(); 콘솔 창 클리어

console.assert(2 === 2,'Assertion');//조건식이 true이면 로그가 출력되지 않음
console.assert(2 === 3, 'false');//조건식이 false이면 로그 출력

const obj = {name : '홍길동', age : 20, color :{default:'red'}}

console.dir(obj,[20]);//객체로 출력 console.dir(obj,[...args])
console.table(obj);//table(표) 형식으로 출력됨
//윈도우 ctrl, 맥 command키 누르고 assert, dir, table 같은 키워드 클릭하면 소스코드 제공
console.dir(obj,{showHidden:true, color:false, depth:1})//depth 1 까지 보여줌
console.dir(obj,{showHidden:false, depth:0})//depth 0 까지만 보여줌

console.time('for loop');
for(let i=0;i<10; i++){
  i++;
}
console.timeEnd('for loop');

//trace
  function f1(){
    f2();
  }
  function f2(){
    f3();
  }
  function f3(){
    console.log('function 3!!');
    console.trace(); //call stack에서 실행되는 순서를 보여준다.
  }

  f1();