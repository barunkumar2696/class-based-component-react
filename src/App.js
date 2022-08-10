import React from 'react'
import './App.css';
import Counter from './Counter';
import Home from './Home';

class App extends React.Component{
  state={
    a : 10
  }
greet(name){
  //this.setState({
   // a:this.state.a + 1
 // })
 console.log(name)
  //this.state.a+=1
  //console.log(this.state.a)
  //console.log(name)
  //console.log("Hellow everyone")
}

  render(){
    console.log("render called")
    return(
      <div>
        {/*<h1>Home component</h1>
        <h2>{this.state.a}</h2>
        <button onClick={()=>this.state.greet("Edyoda")}>Greet students</button>
    */} 
    {/*<Counter/>*/}
    <Home name="Edyoda" greetFunction={this.greet}/>
    </div>
    )
  }
}

export default App