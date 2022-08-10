import React, { Component } from 'react'

export class Counter extends Component {
    state={
        count:0
    }
    IncrementCounter=()=>{
        this.setState({
count:this.state.count + 1
        })}
        DecrementCounter=()=>{
            this.setState({
    count:this.state.count - 1
            })}
            ResetCounter=()=>{
                this.setState({
        count:0
                })}
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <div>
        <button onClick={this.IncrementCounter}>IncrementCount</button>
        <button onClick={this.DecrementCounter}>DecrementCount</button>
        </div>
        <button onClick={this.ResetCounter}>Reset</button>
      </div>
    )
  }
}

export default Counter
