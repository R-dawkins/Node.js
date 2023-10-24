import ejs from 'ejs';
import * as newsRepository from '../repository/newsRepository.js'


// getAll
export async function getAll(req, res){
  const rows = await newsRepository.getAll();
  ejs
  .renderFile('./template/list.ejs', {list:rows})
  .then(data=>{res.end(data)})
}

//create
export async function create(req,res){
  const {url,title,content} = req.body
  const result = await newsRepository.create(url,title,content);
  if(result === 'success') res.status(201).redirect('/news')
}

//getNews
export async function getNews(req,res){
  const nid = req.params.nid
  const rows = await newsRepository.getNews(nid)
  ejs
  .renderFile('./template/content.ejs', {newsContent:rows[0]})
  .then(data=>{res.end(data)})
}

//remove
export async function remove(req,res){
  const nid = req.body.nid
  const result = await newsRepository.remove(nid)
  if(result === 'success') res.status(204).send('delete success')
}

//getReply
export async function getReply(req,res){
  const nid = req.params.nid;
  const rows = await newsRepository.getReply(nid)
  res.json(rows);
}

//postReply
export async function postReply(req,res){
  const {nid, content} = req.body;
  const result = await newsRepository.postReply(nid,content)
  if(result === 'success') res.status(201).send('create success!!')
}

//removeReply
export async function removeReply(req,res){
  const {nid,rid} = req.body;
  const result = await newsRepository.removeReply(nid,rid)
  if(result === 'success') res.status(204).send('delete success')
}