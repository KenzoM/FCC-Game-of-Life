import React, { Component } from 'react';
import { onCellClick } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cell from '../components/cell'

class Board extends Component {
  constructor(props){
    super(props);
    this.onClickToggle = this.onClickToggle.bind(this)
  }
  onClickToggle(coord){
    this.props.onCellClick(coord)
  }
  render(){
    const height = this.props.grid.height
    const width = this.props.grid.width
    let rows = [];
    for (let y = 0; y < height; y++) {
      let rowID = `row${y}`;
      let bin = [];
      for (let x = 0; x < width; x++){
        let cellID = `cell${y}-${x}`;
        let index = y * width + x //index of grid
        let status = this.props.grid.cells[index];//0 = dead, 1 = alive
        bin.push(
          <Cell
            key={x}
            id={cellID}
            status={status}
            onClick={() => this.onClickToggle({x,y})}
          />)
      }
      rows.push(<tr key={y} id={rowID}>{bin}</tr>)
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({onCellClick}, dispatch)
}
function mapStateToProps(state) {
  return {
    grid: state.grid
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Board)