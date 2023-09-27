const express = require('express');
const app = express();
const path = require('path');
const memberList = [];
let result = 0;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'logintest','index.html'))
})
.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname,'logintest','login.html'))
})
.get('/join',(req,res)=>{
  res.sendFile(path.join(__dirname,'logintest','join.html'))
})
.get('/error',(req,res)=>{
  res.sendFile(path.join(__dirname,'logintest','error.html'))
})

app.post('/login',(req,res)=>{
  const {id,pw} = req.body;

  for(let i=0;i<memberList.length;i++){
    let member = memberList[i]
    if(id === member.id && pw === member.pw){
      result = 1;
      console.log(memberList);
      i = memberList.length;
    }else{
      result = 0;
    }
  }

  if(result === 1){
    res.redirect('/')
  }
  else{
    res.redirect('/error')
  }

})
app.post('/join',(req,res)=>{
  memberList.push(req.body);
  res.redirect('/login')
})


app.listen(3000);