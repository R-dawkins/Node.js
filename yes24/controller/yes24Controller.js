import ejs from 'ejs';
import * as yes24Repository from '../repository/yes24Repository.js';

export async function postBooks(req,res){
  const {bname, author, translator, publisher, pday, price, url, category} = req.body
  const result = await yes24Repository.postBooks(bname, author, translator, publisher, pday, price, url, category)
  if(result === 'success') res.status(201).redirect('/BestSeller')
}


export async function getBooks(req,res){
  const rows = await yes24Repository.getBooks();
  ejs
  .renderFile('./template/yes24.ejs',{list:rows})
  .then(result => res.end(result));
}


export async function getPages(req,res){

}


export async function removeBooks(req,res){

}


export async function getDaybestBooks(req,res){

}


export async function getHotbestBooks(req,res){

}


export async function getMonthbestBooks(req,res){

}


export async function getRealbestBooks(req,res){

}


export async function getSteadybestBooks(req,res){

}


