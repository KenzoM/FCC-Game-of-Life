import React, { Component } from 'react'

export default class Controller extends Component {
  constructor(props){
    super(props);
    this.test = this.test.bind(this)
  }
  test(){
    console.log('clicked!')
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 controller">
            <a className="waves-effect waves-light btn" onClick={this.test}>Start</a>
            <a className="waves-effect waves-light btn">Clear</a>
            <a className="waves-effect waves-light btn">Randomize</a>
          </div>
        </div>
      </div>
    )
  }
}
