import { db } from "../db/database.js";
// POST /
export async function postBooks(bname, author, translator, publisher, pday, price, url, category){
  return db
  .execute('insert books(bname, author, translator, publisher, pday, price, url, category) values(?,?,?,?,?,?,?,?)',[bname, author, translator, publisher, pday, price, url, category])
  .then((result)=>'success')
}

// GET /
export async function getBooks(){
  return db
  .execute("select bid, category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='BestSeller'")
  .then((result)=>result[0])
}

// GET /:category
export async function getPages(category){
  return db
  .execute("select bid, category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category=?",[category])
  .then((result)=>result[0])
}

// DELETE /delete
export async function removeBooks(bid){
  return db
  .execute("delete from books where bid =?",[bid])
  .then((result)=>'success')
}









//Home,BestSeller

export async function getDaybestBooks(){
  return db
  .execute("select bid,category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='DayBestSeller'")
  .then(result=>result[0])
}
//DayBest

export async function getHotbestBooks(){
  return db
  .execute("select bid,category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='HotPriceBestSeller'")
  .then(result=>result[0])
}
//HotBest

export async function getMonthbestBooks(){
  return db
  .execute("select bid,category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='MonthWeekBestSeller'")
  .then(result=>result[0])
}
//MonthBest

export async function getRealbestBooks(){
  return db
  .execute("select bid,category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='RealTimeBestSeller'")
  .then(result=>result[0])
}
//RealBest

export async function getSteadybestBooks(){
  return db
  .execute("select bid,category_name,url,bname,author,translator,publisher,pday,format(price,0) price from books b inner join book_category c on b.category = c.category where b.category='SteadySeller'")
  .then(result=>result[0])
}

