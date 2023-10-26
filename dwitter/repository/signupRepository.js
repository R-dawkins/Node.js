import { db } from "../db/database.js";

export async function signUp(params){
  return db
  .execute('insert dwitter(id,name,password,date,content) values(?,?,?,sysdate(),?)',params)
  .then(result=>'success')
}
// promise로 넘김