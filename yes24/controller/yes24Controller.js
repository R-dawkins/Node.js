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
  const rows = await yes24Repository.getBooks();
  res.json(rows)
}


export async function removeBooks(req,res){
  const bid = req.body.bid
  const result = await yes24Repository.removeBooks(bid);
  if(result === 'success') res.status(204).send('delete success');
}


export async function getDaybestBooks(req,res){
  const rows = await yes24Repository.getDaybestBooks();
  res.json(rows)
}


export async function getHotbestBooks(req,res){
  const rows = await yes24Repository.getHotbestBooks();
  res.json(rows)
}


export async function getMonthbestBooks(req,res){
  const rows = await yes24Repository.getMonthbestBooks();
  res.json(rows)
}


export async function getRealbestBooks(req,res){
  const rows = await yes24Repository.getRealbestBooks();
  res.json(rows)
}


export async function getSteadybestBooks(req,res){
  const rows = await yes24Repository.getSteadybestBooks();
  res.json(rows)
} 


