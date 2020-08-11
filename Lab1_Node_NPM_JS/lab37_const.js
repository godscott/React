//const為常數指標，非僅僅常數看待，不能改變型態，但可以增減數值
const PROGRAM_TITLE = "hello"
//PROGRAM_TITLE += " world"
let MY_TITLE = "hello"
MY_TITLE += " world"
console.log(PROGRAM_TITLE, MY_TITLE)
const MAX1 = 1
let i = 100
const MAX2 = i + 50
i += 200
console.log(MAX1, MAX2, i)

const array1 = [1, 2, 3]
console.log(array1)
array1.push(4)
array1.push(5)
array1.push(6)
console.log(array1)

console.log("=============")
let array2 = [1,2,3]
console.log(array2)
array2.push(4)
array2.push(5)
array2.push(6)
console.log(array2)
array2 = ['p','q','r']
console.log(array2)
// array1 = ['p','q','r']