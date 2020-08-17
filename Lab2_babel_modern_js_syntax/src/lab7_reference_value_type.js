let number1 = 1
const number2 = number1
console.log(number1, number2)
number1 = 5
console.log(number1, number2) //5 1


const person = { name: 'Mark' }
const secondPerson = person
const thirdPerson = { ...person } //不會受person更動而更動
console.log("before change:", person, secondPerson, thirdPerson) //{ name: 'Mark' } { name: 'Mark' } { name: 'Mark' }
person.name = "Kelvin"
console.log("after change:", person, secondPerson, thirdPerson) //{ name: 'Kelvin' } { name: 'Kelvin' } { name: 'Mark' }
