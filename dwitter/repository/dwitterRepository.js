import { db } from "../db/database.js";
// controller에서 repository 호출

export async function getAll(){
  //db.execute(sql문,params)
  return db
    .execute('select id,name,content,left(date,10) date from dwitter')
    .then((result)=> result[0]);
}
// select 일 땐 result[0]
// execute는 promise()로 받아야만 실행가능

export async function create(id,name,content){
  return db
    .execute('insert into dwitter(id,name,date,content) values(?,?,curdate(),?)',[id,name,content])
    .then((result)=>'success')
}

export async function getDwitter(id){
  return db
    .execute('select id,name,left(date,10) as date, content from dwitter where id=?',[id])
    .then((result)=>result[0]);
}

export async function update(id, content){
  return db
    .execute('update dwitter set content=? where id=?',[content,id])
    .then((result)=>'success');
}

export async function remove(id){
  return db
    .execute('delete from dwitter where id=?',[id])
    .then((result)=>'success');
}