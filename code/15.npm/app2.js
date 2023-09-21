const fs = require('fs').promises;
const fsr = require('fs');
const process = require('process');
const path = require('path')

//1 폴더 있는지 없는지 확인 없으면 생성

const wSpace = process.cwd();
const folder = process.argv[2]
const nDir = folder ? path.join(wSpace,folder) : false;
const wDir =  folder ? path.join(wSpace,folder) : wSpace;
const vDir = folder ? path.join(wDir,'video') : path.join(wSpace,'video');
const cDir = folder ? path.join(wDir,'capture') : path.join(wSpace,'capture');


// if(!fsr.existsSync(wSpace)) fs.mkdir(wDir)
if(!fsr.existsSync(wDir)) fs.mkdir(nDir)
if(!fsr.existsSync(vDir)) fs.mkdir(vDir)
if(!fsr.existsSync(cDir)) fs.mkdir(cDir)

//2 파일 읽어오기
function fnReadfile(){
  fs.readdir(wSpace)
  .then(files=>{
    fnCheck(files)
  })
}

//3 읽어온 파일 체크
function fnCheck(files){
  files.forEach((file)=>{
    if(isVid(file)){move(file,vDir)}
    if(isImg(file)){move(file,cDir)}
  })
}

//4 mp4, png 거르기
function isVid(file){
  const parsed = path.parse(file)
  if(parsed.ext === '.mp4'){
    return true
  }
}

function isImg(file){
  const parsed = path.parse(file)
  if(parsed.ext === '.png'){
    return true
  }
}
//5 옮기기
function move(file, tPath){
  const oldPath = path.join(wSpace,file) 
  const newPath = path.join(tPath,file)
  fs.rename(oldPath,newPath)
}


fnReadfile()