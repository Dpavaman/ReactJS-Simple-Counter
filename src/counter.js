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

    clickDown = () =>{
      let count = this.state.count ;
      this.setState({
        count : count - 1
      })
    }

    render(){
      return (
        <div>
          <h1>Total Counts : {this.state.count}</h1>
          <button className="clickButton" onClick={this.clickUp}>Click to count Up</button>
          <button className="clickButton" onClick={this.clickDown}>Click to count Down</button>
        </div>
      )
    }
  }
  export default Counter