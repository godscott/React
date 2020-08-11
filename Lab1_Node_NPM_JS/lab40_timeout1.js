// 非同步範例
console.log('program start')
setTimeout(() => { console.log("job1 finshed") }, 2000)
setTimeout(() => { console.log("job2 finshed") }, 3000)
setTimeout(() => { console.log("job3 finshed") }, 4000)
console.log('program ended')