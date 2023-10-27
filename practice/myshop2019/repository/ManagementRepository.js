import { db } from "../db/database.js";

/* 

고객관리 - R, D(회원탈퇴 신청 후)
사원관리 - CRUD
상품관리 - CRUD : 카테고리 관리 포함
주문관리 - R : 연도별, 상품별, 카테고리별, 고객별, 연령별..
판매관리 - R : 연도별, 상품별, 카테고리별, 고객별, 연령별..
매출관리 - R : 연도별, 상품별, 카테고리별, 고객별, 연령별..

*주문관리/판매관리/매출관리는 쿼리가 길어지면
뷰를 생성하여 진행해보세요. 

*/

// Read
export async function getCustomer(){
  return db
    .execute('select row_number() over(order by customer_name) rownum,customer_id,customer_name,gender,phone,email,city,left(birth_date,10) birth_date,left(register_date,10) register_date,point from customer')
    .then(result=>result[0])
}

export async function getCustomerPage(){
  return db
    .execute('select row_number() over(order by customer_name) rownum,customer_id,customer_name,gender,phone,email,city,left(birth_date,10) birth_date,left(register_date,10) register_date,point from customer')
    .then(result=>result[0])
}


export async function getEmployee(){
  return db
    .execute('select row_number() over(order by employee_id) rownum,employee_id,employee_name,gender,phone,email,left(hire_date,10) hire_date,left(retire_date,10) retire_date from employee_copy')
    .then(result=>result[0])
}


export async function getProduct(){
  return db
    .execute('select row_number() over(order by sub_category_id) rownum,product_id,product_name,sub_category_id,sub_category_name,category_id,category_name from product_view')
    .then(result=>result[0])
}


export async function getOrder(){
  return db
  .execute('select distinct order_date,order_id,customer_name,employee_name,format(sub_total,0) sub_total,format(delivery_fee,0) delivery_fee,format(total_due,0) total_due from myshop_view order by order_date')
  .then(result=>result[0])
}


export async function getSelling(){
  return db
  .execute('select row_number() over(order by product_name) rownum,product_name, format(sum(order_qty),0) order_qty,format(unit_price,0) unit_price,format(sum(discount),0) discount,format(sum(line_total),0) line_total,format(sum(sub_total),0) sub_total,format(sum(delivery_fee),0) delivery_fee,format(sum(total_due),0) total_due from myshop_view group by product_name,unit_price')
  .then(result=>result[0])
}


export async function getSales(){
  return db
    .execute('select order_date,format(sub_total,0) sub_total,format(delivery_fee,0) delivery_fee,format(total_due,0) total_due from order_header_view')
    .then(result=>result[0])
}

//

//DELETE
// export async function removeCustomer(cid){
  // return db
  // .execute("delete * from customer where customer_id != ('?');",[cid])
  // .then(result=>result[0])
// }
