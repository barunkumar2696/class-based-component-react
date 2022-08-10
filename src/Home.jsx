import React, { Component } from 'react'

export default class Home extends Component {
    state={   }

  render() {
    console.log(this.props)
    const {name,greetFunction}=this.props
    return (
      <div>
        <h1>Home Component {name}</h1>
        <button onClick={()=>greetFunction('John')}>Call greet function</button>
      </div>
    )
  }
}
//passing parameter from child in parent