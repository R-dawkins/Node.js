import { db } from "../db/database.js";

export async function updateEmployee(name,id){
  console.log(name,id)
  return db
  .execute('update employee_copy set employee_name=? where employee_id=?',[name,id])
  .then(result=>"success")
}