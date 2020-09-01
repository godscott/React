import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCoke} from '../redux'

function HookCokeContainer() {
    const numOfCokes = useSelector(state=>state.numOfCokes)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>[Hook] Num of cokes={numOfCokes}</h3>
            <button onClick={()=>dispatch(buyCoke())}>Buy Coke</button>
        </div>
    )
}

export default HookCokeContainer
