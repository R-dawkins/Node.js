const fs = require('fs').promises;
const fsr = require('fs');
const path = require('path');
const process = require('process');
/* 
  제목 : 사진 폴더 정리 Script 
  요구사항
  1. 동영상(mp4), 이미지(png) 파일들이 함께 있는 폴더를 
  각각 동영상과 이미지를 분리하여 관리
  script를 실행하면 동영상,이미지 파일들이 각각 맞는 폴더(동영상,이미지폴더)
  로 정리되어 들어가는 것
  2. 동영상 파일은 video 폴더에 png 파일은 capture 폴더에 각각 이동
*/


const WorkingSpace = process.cwd();
const videoExists = fsr.existsSync(path.join(WorkingSpace,'video'))
const captureExists = fsr.existsSync(path.join(WorkingSpace,'capture'))
const garbage = path.join(WorkingSpace,'garbage')
const videoPath = path.join(WorkingSpace,'video')
const capturePath = path.join(WorkingSpace,'capture')
// if(!videoExists) fs.mkdir('video')
// if(!captureExists) fs.mkdir('capture')

//실행하는 명령어의 매개변수를 받아 workingDir로 설정하여 하위폴더 생성
const folder = process.argv[2];
const nodePath = folder ? path.join(WorkingSpace,folder) : false;
const WorkingDir = folder ? path.join(WorkingSpace,folder) : WorkingSpace;
const videoDir =folder ? path.join(WorkingDir,'video') : path.join(WorkingSpace,'video');
const captureDir =folder ? path.join(WorkingDir,'capture') : path.join(WorkingSpace,'capture');

// if(!fsr.existsSync(WorkingSpace)) fs.mkdir(WorkingDir)
if(!fsr.existsSync(WorkingDir)) fs.mkdir(nodePath)
if(!fsr.existsSync(videoDir)) fs.mkdir(videoDir)
if(!fsr.existsSync(captureDir)) fs.mkdir(captureDir)


/* const videosort = (()=>{fs.mkdir('video')
.then(()=>{
  fs.readdir(garbage,{})
    .then(file=>{
      const fileGroups = file.reduce((groups, file)=>{
        const ext =file.split('.')[1];
        if(!groups[ext]) {
          groups[ext] = [];
        }
        groups[ext].push(file);
        return groups;
      }, {});
        let mp4 = fileGroups.mp4
        for (const file of mp4){
          fs.copyFile(`${path.join(garbage,file)}`,`${path.join(__dirname,'video',file)}`)
        }
    })
})
.catch(console.error)
})//source code */

function sort(file,extname,dir){
  const fileGroups = file.reduce((groups, file)=>{
    const ext = file.split('.')[1];
    if(!groups[ext]){
      groups[ext] = [];
    }
    groups[ext].push(file);
    return groups;
  }, {});
  let ext = fileGroups[extname]
  for (const file of ext){
    fs.copyFile(`${path.join(garbage,file)}`,`${path.join(__dirname,dir,file)}`)
  }
}

function fnRead(extname,dir){
  fs.readdir(garbage,{})
  .then(function(file){
    sort(file,extname,dir)
  })
}

function fnMkdir(extname,dir){//확장자 이름 문자열과 video나 capture 폴더 경로 전달
  fs.mkdir(dir)//video나 capture 폴더 생성
  .then(function(){
  fnRead(extname,dir)
  })
}



/* if(!videoExists && !captureExists){
  fnMkdir('mp4','video')
  fnMkdir('png','capture')
}
else if(videoExists && captureExists){
  fnRead('mp4','video')
  fnRead('png','capture')
}
else if(!videoExists && captureExists){
  fnMkdir('mp4','video')
  fnRead('png','capture')
}
else if(videoExists && !captureExists){
  fnRead('mp4','video')
  fnMkdir('png','capture')
} */


function moveFile(){
  fsr.promises.readdir(WorkingSpace)
  .then(files=>{
    fileCheck(files)
  })
}

function isVideoFile(file){
  const parsed = path.parse(file)
  if(parsed.ext === '.mp4') return true;
}

function isImgFile(file){
  const parsed = path.parse(file)
  if(parsed.ext === '.png') return true;
}

function fileCheck(files){
  files.forEach(file=>{
    if(isVideoFile(file)){
      move(file, videoDir)
    }else if(isImgFile(file)){
      move(file, captureDir)
    }
  })
}

function move(file,targetPath){
  const oldPath = path.join(WorkingSpace,file)
  const newPath = path.join(targetPath,file)
  fs.rename(oldPath,newPath)//구경로에서 신경로로 이동
  .then(console.log('movecomplete'))
}


  moveFile()





