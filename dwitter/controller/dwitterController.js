import ejs from 'ejs';
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import * as dwitterRepository from '../repository/dwitterRepository.js'
//Controller에서 rendering 작업 진행
//dwitterRepository >> dwitterController에서 import해서 함수 사용 >> dwitterRouter

/** getAll */
export async function getAll(req, res){
  const rows = await dwitterRepository.getAll();
  ejs
  .renderFile('./template/index.ejs', {list:rows})
  .then((data)=>{
    res.end(data)
  })//app.js에서 실행되기때문에 app.js 기준으로 패스를 설정해야한다.
}

/** create */

export async function create(req, res){
  const {id,name,content} = req.body
    const result = await dwitterRepository.create(id, name, content);// result에는 dwitterRepository에서 .execute.then(result)가 담겨있다.
    if(result === 'success') res.redirect('/dwitter'); 
    
}

/** getDwitter */

export async function getDwitter(req, res){
  let id = req.params.id
  const rows = await dwitterRepository.getDwitter(id);

  ejs
  .renderFile('./template/index.ejs', {list:rows})
  .then((data)=>{
    res.end(data)
  })//app.js에서 실행되기때문에 app.js 기준으로 패스를 설정해야한다.
}

/** update */

export async function update(req, res){
  //로그인 한 회원만 업데이트 가능하도록 인증작업
  // 1. 토큰 가져오기
  
  const token = req.cookies.x_auth;
  const verify = jwt.verify(token,'704YJJ&3si|?');
  // verify에 token 값이 들어오지 않을 시 jwt token must be provided 오류 발생
  // 2. 토큰 검증 app.js에서 쿠키 파싱 필요

  console.log(verify);
  const {id, content} = req.body;
  const result = await dwitterRepository.update(id, content);
  // null값일 확률이 적은 변수를 앞쪽에 배치한다 여기선 id
  if(id === verify.id){
    if(result === 'success') res.status(204).send('update success')
    else{res.status(500).send('서버 이상')}
  }else{
    res.status(401).send('권한이 없습니다.')
  }

}

/** remove */

export async function remove(req, res){
  const {id} = req.body;
  const result = await dwitterRepository.remove(id);
  if(result === 'success') res.status(204).send('delete success');
  }

















