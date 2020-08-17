// https://ithelp.ithome.com.tw/articles/10221119
const fs = require('fs')
let data = ''

console.log(`current working directory:${process.cwd()}`) //路徑位置
console.log(`internal variable __dirname=${__dirname}`)
//非同步讀檔
const readerStream = fs.createReadStream('README.md')
readerStream.setEncoding('UTF8')

readerStream.on('data', function (chunk) { //一次讀取一個chunk大小，非一次全部讀取所有內文
    console.log('.')
    data += chunk
})
readerStream.on('end', function(){
    console.log('xxxxxxxxxxxxxxxxxx')
    console.log(data)
})
readerStream.on('error', function(err){
    console.log(err.stack)
})
console.log("program ended")