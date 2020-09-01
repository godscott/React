import React from 'react'
import {connect} from 'react-redux'
import { buyCoke } from '../redux/coke/CokeActions'

function CokeContainer(props) {
    return (
        <div>
            <h3># of cokes={props.numOfCokes}</h3>
            <button onClick={props.buyCoke}>Buy Coke</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCokes:state.coke.numOfCokes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCoke: () => dispatch(buyCoke())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CokeContainer)
