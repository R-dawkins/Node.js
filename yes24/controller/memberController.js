import * as memberReopository from '../repository/memberRepository.js'
import bcrypt from 'bcryptjs';
import ejs from 'ejs'
import jwt from 'jsonwebtoken'

export async function getloginPage(req,res){
ejs
.renderFile('./template/yesLogin.ejs')
.then(result=>res.end(result))
}

export async function login(req,res){
  let {id,pass} = req.body
  const dbPass = await memberReopository.login(id)
  const checkPass =await bcrypt.compare(pass,dbPass.password)
  if(checkPass){
    const token = createToken(id);
    res
    .cookie('x_auth',token,{maxAge:60*60*1000,httponly:true})
    .status(200)
    .redirect('/bestSeller')
  }
  else{res.status(401).send('wrong password')}
}

export async function signUp(req,res){
  let {id,name,password} = req.body
  const hashPass = bcrypt.hashSync(password,10)
  const params = [id,name,hashPass];
  const result = await memberReopository.signUp(params);
  if(result === 'success') res.redirect('/')
}

function createToken(id){
  return jwt.sign(
    {id : id}, '704YJJ&3si|?'
  )
}

export async function removeCookie(req,res){
  res.clearCookie('x_auth')
  res.redirect('/')
}