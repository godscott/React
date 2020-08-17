const buffer1 = Buffer.from('ABCDEFG1234567abcdefg')
const buffer2 = Buffer.allocUnsafe(buffer1.length)
buffer1.copy(buffer2)
console.log("buffer2 content:"+buffer2.toString())