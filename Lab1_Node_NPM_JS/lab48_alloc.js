for(let i=0; i<2; i++){
    const buffer1 = Buffer.allocUnsafe(30) //需要清空，否則會有亂數值
    console.log(buffer1)
    buffer1.fill(0)
    console.log(buffer1)
}

for(let i=0; i<2; i++){
    const buffer1 = Buffer.alloc(30) //不需要清空
    console.log(buffer1)
}

console.log("unspecified")
for(let i=0; i<2; i++){
    const buffer1 = new Buffer(30) //必須alloc
    console.log(buffer1)
}