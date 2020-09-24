import React, { Component } from 'react' ;

class Counter extends Component{
  constructor()
  {
    super();
    this.state = {
      count : 0
    };

  }

    clickUp = ()=>{
      let count = this.state.count ;
        this.setState({
            count : count+1
        })
        console.log(this.state.count)
    }
    render(){
      return (
        <div>
          <h1> Counts : {this.state.count}</h1>
          <button className="clickButton" onClick={this.clickUp}>Click to count Up</button>
        </div>
      )
    }
  }
  export default Counter