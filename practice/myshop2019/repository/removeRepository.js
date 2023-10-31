import { db } from "../db/database.js";

export async function removeEmployee(id){
  console.log(id);
  return db
  .execute('delete from employee_copy where employee_id = ?',[id])
  .then(result=>"success")
}

export async function removeProduct(id){
  return db
  .execute('delete from product_copy where product_id = ?',[id])
  .then(result=>"success")
}