import React, { Component } from 'react'

export default class Controller extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 controller">
            <a className="waves-effect waves-light btn">Start</a>
            <a className="waves-effect waves-light btn">Clear</a>
            <a className="waves-effect waves-light btn">Randomize</a>
          </div>
        </div>
      </div>
    )
  }
}
