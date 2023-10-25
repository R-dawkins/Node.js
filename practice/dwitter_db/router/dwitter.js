import express from 'express';
import ejs from 'ejs';
import dbConfig from '../db/database.js';

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

// 1. GET: /dwitter - All Dwitter List
router.get('/', (req, res, next) => {
  const sql = 'select id, name, left(date,10) as date, content from dwitter';
  conn.query(sql, (err,rows,fields) => {
    if(err){
      console.log(err);
    }else{     
      ejs
      .renderFile('./template/index.ejs', {list:rows})
      .then((data) => { 
        console.log(data);
        res.end(data); });
    }
  }); 
});  

// 2. POST: /dwitter - tweet create
router.post('/', (req, res, next) => {
  const {id, name, content} = req.body;
  const sql = 'insert into dwitter(id,name,date,content) values(?,?,curdate(),?)';
  const params = [id,name,content];
  conn.query(sql,params, (err)=>{
    if(err) console.log('query is not execute!!!');
    else res.redirect('/dwitter');
  });
   
});

// 3. GET: /dwitter/:id - My Dwitter List
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const sql = 'select id,name,left(date,10) as date, content from dwitter where id=?';
  conn.query(sql,id, (err,rows,fields) => {
    if(err) console.log(err)
    else {
      ejs
      .renderFile('./template/index.ejs', {list:rows})
      .then((data) => res.end(data));
    }
  });

});


// 4. PUT: /dwitter/:id - My Dwitter update
router.put('/', (req, res, next) => {
  const {id, content} = req.body;
  const sql = 'update dwitter set content=? where id=?';
  const params = [content, id];
  conn.query(sql,params, (err) => {    //insert,update,delete ==> err 
    if(err) console.log(err);
    else res.status(204).send('update success!!');
  });
});



// 5. DELETE: /dwitter/:id - My Dwitter delete 
router.delete('/', (req, res, next) => {
  const {id} = req.body;
  const sql = 'delete from dwitter where id=?';
  conn.query(sql,id, (err) => {
      if(err) console.log(err)
      else res.status(204).send('delete success!'); 
  });
 });


export default router;