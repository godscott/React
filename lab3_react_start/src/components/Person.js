//輸入rfc(react function component)自動產生下列Snipping Code
/*
import React from 'react'

export default function Person() {
    return (
        <div>
            
        </div>
    )
}
*/

import React, {useState} from 'react'

// 方法一
// export default function Person() {
//     return (
//         <div>
//         <p>I am groot</p>
//         </div>
//     )
// }

// 方法二 (只有一行可以的寫法)
// export default function Person() {
//     return <p>I am groot</p>
// }

// 方法三
// const Person = () => {
//     return <p>I am groot, I am the {Math.floor(Math.random() * 5)}th generation</p>
// }

const Person = props => {
    const [stateString, changeString] = useState({ 
        publisher: "Marvel University",
        studio: "Disney"
    })
    const switchVenderHandler = () => {
        changeString({ 
            publisher: "DC Universe",
            studio: stateString.studio
         })
    }
    const showStatusHandler = () => {
        console.log(stateString)
    }
    return (
        <div>
            <button onClick={switchVenderHandler}>Change!</button>
            <button onClick={showStatusHandler}>Show!</button>
            <h1>{stateString.publisher}</h1>
            <p onClick={props.clickCallback}>I am {props.name}</p>
            <p>I am {props.name}</p>
            <p>I am {props.age} years old,</p>
            <p>I am the {Math.floor(Math.random() * 5)}th generation</p>
            <p style={{color:"red"}}>My job function is {props.children}</p>
        </div>
    )
}

export default Person
