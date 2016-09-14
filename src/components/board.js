import React, { Component } from 'react';
import Cell from '../containers/cell'

export default class Example extends Component {
  constructor(props){
    super(props);
    this.state = {height: 18, width: 40}
  }
  render(){
    let rows = [];
    for (var i = 0; i < this.state.height; i++){
      let rowID = `row${i}`
      let bin = []
      for (var idx = 0; idx < this.state.width; idx++){
        let cellID = `cell${i}-${idx}`
        // bin.push(<td key={cellID} id={cellID} ></td>)
        bin.push(<Cell key={cellID} id={cellID} />)
      }
      rows.push(<tr key={i} id={rowID}>{bin}</tr>)
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
