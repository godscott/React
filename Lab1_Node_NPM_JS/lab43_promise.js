//Promise 成功執行resolve, 失敗執行reject
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise1, no error")
        resolve(100)
    }, 2000)
})
console.log("program started")
promise.then(result => console.log("promise1, OK, result=" + result))
console.log("program ended")

//========================
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error("OOPS!!!")
            console.log("promise2, no error")
            resolve(100)
        } catch (e) {
            reject(e)
        }

    }, 2000)
})
console.log("program started2")
promise2.then(result => console.log("promise2, OK, result=" + result))
    .catch(error => console.log("promise2, Found exception:" + error))
console.log("program ended2")