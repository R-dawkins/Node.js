import * as signupRepository from '../repository/signupRepository.js'
import bcrypt from 'bcryptjs';

export async function signUp(req,res){

  const {id, name, password, content} = req.body;
  const hashPass = bcrypt.hashSync(password,10)
  //hashSync(암호화할변수,salt 랜덤 문자열 자릿수)
  // console.log(hashPass);
  // $2a$09$YWZCiBuYbba2ziVfS3MZMO3.0OnAW.Qjmk9A4l4d/U53eYE.Nr7CK
  // $2a$09$에 09는 salt의 자릿수로 추정된다.
  const params = [id,name,hashPass,content];
  const result = await signupRepository.signUp(params);
  // Repository에서 promise로 넘겼기 때문에 await를 해주어야한다.

  if(result === 'success') res.redirect('/dwitter')
  
}