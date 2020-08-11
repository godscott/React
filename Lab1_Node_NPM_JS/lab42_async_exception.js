const { exception } = require("console");
// Exception有被攔截
try {
    throw new Error("HAHA")
} catch (e) {
    console.log("got an error:" + e)
}
console.log("program terminated1")

// Exception沒有被攔截，除非在setTimeout中攔截
try {
    setTimeout(() => { throw new Error("DDAA") }, 200)
} catch (e) {
    console.log("got an error:" + e)
}
console.log("program terminated2")

// Exception在setTimeout中攔截
try {
    setTimeout(() => {
        try{
            throw new Error("JJII") 
        } catch(e){
            console.log("got an error in setTimeout:",e)
        }
    }, 200)
    console.log("do something else...")
} catch (e) {
    console.log("got an error:" + e)
}
console.log("program terminated3")