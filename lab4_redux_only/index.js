//販賣機Lab
const redux = require('redux')
const createStore = redux.createStore

console.log("vending machine lab for redux!") 

// action ==> intension, the act will be performed
const BUY_COKE = 'BUY_COKE'
const BUY_FANTA = 'BUY_FANTA'

const action1 = {
    type: BUY_COKE,
    info: 'my first redux action'
} //object
function buyCoke() { // action creater
    return action1
}

const action2 = {
    type: BUY_FANTA,
    info: 'my second redux action'
}
function buyFanta() {
    return action2
}

// reducer ==> connect sotre & action, receive action, perform something in store
const initialState = {
    numofCokes: 100,
    numofFantas: 50
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_COKE:
            return {
                ...state, //其他商品的數量需回傳
                numofCokes: state.numofCokes - 1
            }
        case BUY_FANTA:
            return {
                ...state,
                numOfFantas: state.numOfFantas - 1
            }
        default: // very important!!!
            return state
    }
}
    
// store ==> state management
const store = createStore(reducer)
console.log("initial state, coke=", store.getState()) // active get state by getState()
unsubscribeDB = store.subscribe(() => { console.log('log something to db::', store.getState()) })
unsubscribe1 = store.subscribe(() => { console.log('moniter change, state=', store.getState()) }) //訂閱偵測狀態
console.log("David buy a coke:")
store.dispatch(buyCoke())
console.log("John buy 2 cokes, 2 fanta:")
store.dispatch(buyCoke())
store.dispatch(buyCoke())
store.dispatch(buyFanta())
store.dispatch(buyFanta())
unsubscribe1()

unsubscribe2 = store.subscribe(()=>{console.log('** change, state=',store.getState())})
console.log("Mary buy 3 cokes, 3 fanta:")
store.dispatch(buyCoke())
store.dispatch(buyCoke())
store.dispatch(buyCoke())
store.dispatch(buyFanta())
store.dispatch(buyFanta())
store.dispatch(buyFanta())
unsubscribe2()
unsubscribeDB()
// perform something in store, return a new state
    
    