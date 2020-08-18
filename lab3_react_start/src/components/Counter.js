import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "counter=",
            count:0
        }
    }

    clickHandler = () => {
        // 1. direct alter state
        //this.state.count += 1
        // 2. use setState and pass a new state object
        // const nextValue = this.state.count + 1
        // this.setState({ count: nextValue }, () => {
        //     console.log(`callback value = ${this.state.count}`)
        // }) //解決畫面顯示數字與button clicked數字不一致的問題
        // 3 use setState
        this.setState((prevState, props) => ({
           count: prevState.count + parseInt(props.step) }
        ), () => {
            console.log(`callback value = ${this.state.count}`)
        })

        // this.setState((prevState, props) => {
        //     return { count: prevState.count + parseInt(props.step) }
        // }, () => {
        //     console.log(`callback value = ${this.state.count}`)
        // })
        console.log(`button clicked ${this.state.count} times`)
    }

    clickHandler10 = () =>{
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}{this.state.count}</h2>
                <button onClick={this.clickHandler}>click</button>
                <button onClick={this.clickHandler10}>10x click</button>
            </div>
        )
    }
}
