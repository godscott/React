// 非同步讀取檔案
var fs = require('fs') //New File物件
const FILE_PATH = "README.md"
const READ_LIMIT = 10000
fs.open(FILE_PATH, 'r', (error, handler) => { //檔案唯讀
    if (error) { //error處理機制
        console.log(error)
        return
    }
    console.log("file opened, continue")
    let buffer = new Buffer.alloc(READ_LIMIT)
    // 讀取檔案，設定Buffer大小
    fs.read(handler, buffer, 0, READ_LIMIT, null, (error, length) => {
        console.log(`total:${length} bytes`)
        const result = buffer.slice(0, length)
        console.log("data read:" + result.toString())
        fs.close(handler, () => { console.log("close successfully") })
    })
})