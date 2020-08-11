// 同步方式讀取本機檔案
const process = require('process')
const fs = require('fs') //New File物件
const FILE_PATH = "README.md"
console.log("program started")
console.log(process.cwd()) //讀取cwd路徑
const file1 = fs.readFileSync(FILE_PATH) //讀取檔案
console.log(typeof file1)
console.log(file1.toString())
console.log("Program Ended")