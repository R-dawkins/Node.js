import { db } from "../db/database.js";

export async function getAll(){
  return db
  .execute('select nid,url,title,content,left(rdate,10) rdate from news')
  .then((result)=> result[0]);
}

export async function create(url,title,content){
  return db
  .execute('insert news(url,title,content,rdate) values(?,?,?,curdate())',[url,title,content])
  .then((result)=>'success')
}

export async function getNews(nid){
  return db
  .execute('select nid,url,title,content,left(rdate,10) rdate from news where nid=?',[nid])
  .then((result)=> result[0]);
}

export async function remove(nid){
  return db
  .execute('delete from news where nid=?',[nid])
  .then((result)=>'success')
}

export async function getReply(nid){
  return db
  .execute('select rid,nid,left(redate,19) redate,content from news_reply where nid=?',[nid])
  .then((result)=>result[0])
}

export async function postReply(nid,content){
  return db
  .execute('insert news_reply(nid,redate,content) values(?,sysdate(),?)',[nid,content])
  .then((result)=>'success')
}

export async function removeReply(nid,rid){
  return db
  .execute('delete from news_reply where nid=? and rid =?',[nid,rid])
  .then((result)=>'success')
}