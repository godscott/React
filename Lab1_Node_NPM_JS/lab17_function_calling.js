function echoMe(name) {
    console.log("echo==>" + name)
}

echoMe("Mark")
echoMe()
echoMe('a', 'b')
var a1 = ['a', 'b']
echoMe(a1)

function mySum() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(mySum())
console.log(mySum(1, 2, 3))
console.log(mySum('a', 'b', 'c'))