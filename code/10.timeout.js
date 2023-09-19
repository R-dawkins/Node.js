//callback 함수가 동작하는데 걸리는 시간
console.log('timeout check!')
console.time('timeout 0');

setTimeout(() => {
  console.timeEnd('timeout 0')
  console.log('setTimeout---')
}, 1000);

process.nextTick(()=>{
  console.log('nextTick')
})

//api >> task queue >> event loop가 call stack으로