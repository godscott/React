function compareVarLet() {

    for (var i = 0; i < 10; i++) { //直接印出最後結果10,10,...,10,10
        setTimeout(() => { console.log("var, i=", i) }, 1000)
    }
    for (let j = 0; j < 10; j++) { //印出每次變化的值1,2,...,9,10
        setTimeout(() => { console.log("let, j=", j) }, 1000)
    }
}
compareVarLet()