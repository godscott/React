//輸入rfce自動產生下列Snipping Code
/* 
import React from 'react'

function Banner() {
    return (
        <div>
            
        </div>
    )
}

export default Banner
*/

import React from 'react'

const Banner = props => {
    return (
        <div>
            <input type="text" onChange={props.clickCallback}
             value={props.name}/>
        </div>
    )
}

export default Banner
