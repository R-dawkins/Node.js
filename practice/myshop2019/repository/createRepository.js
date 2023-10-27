import { db } from "../db/database.js";

export async function postEmployee(params){
  return db
  .execute('insert employee_copy(employee_id,employee_name,gender,phone,email,hire_date,retire_date) values(null,?,?,?,?,curdate(),null)',params)
  .then(result=>'success')
}