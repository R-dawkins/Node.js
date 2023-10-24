import ejs from 'ejs';
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
  const {id, content} = req.body;
  const result = await dwitterRepository.update(id, content);
  if(result === 'success') res.status(204).send('update success');
}

/** remove */

export async function remove(req, res){
  const {id} = req.body;
  const result = await dwitterRepository.remove(id);
  if(result === 'success') res.status(204).send('delete success');
  }