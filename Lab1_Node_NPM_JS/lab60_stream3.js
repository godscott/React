//讀檔後轉成壓縮檔
const fs = require('fs')
const zlib = require('zlib')
const readerStream = fs.createReadStream('README.md')
readerStream.setEncoding('UTF8')

const zip = zlib.createGzip()
const writerStream = fs.createWriteStream('README.md.gz')
readerStream.pipe(zip).pipe(writerStream)