// log內可以傳送多個參數，dir只接受一個參數，多傳的不會印
const course = { name: "Node.JS", duration: 14, instructor: "Mark Ho" }
const duration = ['mon','tue','wed','thr','fri']
console.log(typeof course, course)
console.log(duration)

console.dir(duration)
console.dir(course)
console.dir("only 1 argument")
console.dir(course)
console.dir(course, duration) //只印course
console.dir(duration, course) //只印duration