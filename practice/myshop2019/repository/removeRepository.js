import { db } from "../db/database.js";

export async function remove(id){
  console.log(id);
  return db
  .execute('delete from employee_id where employee_id = ?',[id])
  .then(result=>"success")
}