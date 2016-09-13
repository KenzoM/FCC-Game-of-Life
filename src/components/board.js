import React, { Component } from 'react'

export default class Example extends Component {
  constructor(props){
    super(props);
    this.state = {height: 18, width: 20}
  }
  render(){
    let rows = [];
    for (var i = 0; i < this.state.height; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.width; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID}></td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 board"></div>
            <table id="simple-board">
               <tbody>
                 {rows}
               </tbody>
             </table>
          </div>
      </div>
    )
  }
}
