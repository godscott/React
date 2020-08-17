const user = {
    id: 42,
    is_verified: true
}
// const myId = user.id
// const is_verified = user.is_verified
// console.log(myId, is_verified, user.id, user.is_verified)

// const {id, is_verified} = user
// console.log(id, is_verified, user.id, user.is_verified)
const {id} = user //只接受一個參數
console.log(id, user.id, user.is_verified)

const numbers = [2, 4, 6, 8, 10]
const [n1, n2, n3] = numbers // array依順序對應
console.log(n1, n2, n3)

const employee = { name: "Mark", age: 44, role:"RD", location:"taipei" }
const {name, age, location} = employee // list名稱需要完全對應
console.log(age, name, location) // 44 Mark taipei

const {role1} = employee // list名稱需要完全對應 
console.log(role1) // undefined