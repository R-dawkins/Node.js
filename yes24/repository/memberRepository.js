import { db } from "../db/database.js";

export async function login(id){
  return db
  .execute('select password from yes_member where id = ?',[id])
  .then(result=>result[0][0])
}

export async function signUp(params){
  return db
  .execute('insert yes_member(id,name,password) values(?,?,?);',params)
  .then(result=>'success')
}