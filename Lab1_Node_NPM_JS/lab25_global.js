global.coffee = 'latte'
global.juice = 'lemonade'
hello = 'world' //視為Global
var fruit = 'apple'
function printSomething(name){
    console.time(global[name]) //計時

    console.log(global[name])
    console.warn(global[name])

    console.timeEnd(global[name])
}
printSomething('coffee') //latte
printSomething('juice') //lemonade
printSomething('hello') //world
printSomething("hi") //undefined
printSomething('fruit') //undefined