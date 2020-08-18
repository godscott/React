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

import React from 'react'

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
const Person = () => {
    return <p>I am groot</p>
}

export default Person
