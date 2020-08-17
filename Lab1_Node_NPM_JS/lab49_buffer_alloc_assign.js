buffer1 = Buffer.alloc(20)
console.log(buffer1) //自動填00
len = buffer1.write("ABCDE54321")
console.log(len, buffer1) 
buffer2 = new Buffer([97,98,99,100,101,102])
console.log(buffer2)
buffer3 = new Buffer.from("Hello")
console.log(buffer3)