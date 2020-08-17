class Course {
    duration = 49
    printDuration = () => {
        console.log(`duration = ${this.duration}`)
    }
}
class ReactCourse extends Course {
    name = 'React'
    printCourse = () => {
        return `course name = ${this.name}`
    }
}
const c1 = new Course()
console.log(`c1 course ${c1.printDuration()}`)

const c2 = new ReactCourse()
console.log(`c1 course ${c2.printDuration()}, ${c2.printCourse()}`)