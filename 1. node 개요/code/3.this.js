  // var num; 
  function hello(num){
    this.num = num; /* 전역 변수로 선언된다 */
    console.log(num);
    // console.log(this); //전역 객체(global)
  }//함수 선언식
  hello(100);

  console.log(num);

  function test2(){
    console.log(num); //num이 hello라는 함수에서 this.num로 전역 변수처럼 선언됐기때문에 test2에서도 num이라는 변수를 쓸 수있다
  }
//function은 class처럼 따로 만들어지지 않기 때문에 this가 global객체를 reference한다
  test2()

  class Test{
    constructor(name){
      this.name = name;
      console.log(this);// = Test 객체
    }
  }

  const t = new Test('홍')

  //this의 reference 대상 차이 

  let fn = ((num)=>{
    this.num = num;
    console.log(this.num);
  })

  fn(50)
  console.log(num);
