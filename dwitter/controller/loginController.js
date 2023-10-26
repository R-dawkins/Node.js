import ejs from 'ejs'
import bcrypt from 'bcryptjs'
import * as loginRepository from '../repository/loginRepository.js'

export async function login(req, res){
  const {id, pass} = req.body;
  //넘어온 pass -> hash 알고리즘 적용
  //db에 저장된 패스워드 가져오기
  const dbPass = await loginRepository.login(id)
  const checkPass = await bcrypt.compare(pass,dbPass.password)
  // compare(암호화되지않은pass와 db의hashPass를 인수로 한다)
  // compare(plainPass, dbHashPass)
  if(checkPass === true){ res.redirect('/dwitter')}
  else{res.status(401).send('wrong password')}
}