//...用法
const numbers = [3, 1, 4, 1, 5, 6]
const newNumbers = [...numbers, 55, 33] //array
console.log(typeof newNumbers, newNumbers, Array.isArray(newNumbers))

//============
const course = {
    name: 'react programming',
    description: "react with spring boot"
}
const fullCourse = {
    ...course, //list
    duration:'56hours'
}
console.log(fullCourse)

//============
const filter1 = (...arguments) => {
    return arguments.filter(element => element > 10)
}
console.log('filter1=', filter1(1, 2, 10, 11, 22, 5, 3)) //[11,22]
console.log('filter2=', filter1([1, 2, 10, 11, 22, 5, 3])) //[]辦別不出來，所以顯示[]
console.log('filter3=', filter1(...[1, 2, 10, 11, 22, 5, 3])) //[11,22]
