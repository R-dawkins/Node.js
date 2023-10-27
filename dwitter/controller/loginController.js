import ejs from 'ejs'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import * as loginRepository from '../repository/loginRepository.js'

export async function login(req, res){
  const {id, pass} = req.body;
  //넘어온 pass -> hash 알고리즘 적용
  //db에 저장된 패스워드 가져오기
  const dbPass = await loginRepository.login(id)
  const checkPass = await bcrypt.compare(pass,dbPass.password)
  console.log(checkPass);
  // compare(암호화되지않은pass와 db의hashPass를 인수로 한다)
  // compare(plainPass, dbHashPass)
  if(checkPass === true){
    const token = createToken(id);
    res
    .cookie('x_auth',token,{maxAge:60*60*1000,httponly:true})
    .status(200)
    .redirect('/dwitter');
    //res.cookie('토큰명',token,{옵션 : 유효기간expire,옵션 : 쿠키가 http에만 저장이 되게 하는 것 httpOnly});
  } // 로그인 성공 --> session, jwt(JSON WEB TOKEN)
  else{res.status(401).send('wrong password')} // 로그인 실패 --> 
}

function createToken(id){
  return jwt.sign(
    {id : id}, '704YJJ&3si|?'
  );
}
// jwt.io > jwt token decode 가능 
//payload = jwt 토큰에 들어가는 정보 id, 이름등
// payload에 어떤 정보를 넣으셧나요? => id 넣었습니다, 이름넣었습니다,...
// signature

/* 
  jwt.sign(
    {넘길정보 : ?}, '정보와 섞을 문자열');
    문자열이 너무 길면 과부하 가능성
*/