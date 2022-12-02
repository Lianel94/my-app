import React, { Component } from 'react'

export class Form extends Component {

    state = {
        name: 'Viktoria',
        count: 0
    }

    handleChange = (event) => {
        this.setState({name: event.target.value}) 
    }

    handleClick = (event) => {
        // this.setState({count: this.state.count + 1})
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

    render() {
        return (
            <React.Fragment>
                <h1>Classes Component</h1>
                <h2>Name: {this.state.name}</h2>
                <input type="text" onChange={this.handleChange}></input>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Click</button>
            </React.Fragment>
        )
    }
}