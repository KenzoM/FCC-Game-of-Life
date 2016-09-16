import React, { Component } from 'react';
// import * from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cell from '../components/cell'

class Board extends Component {
  constructor(props){
    super(props);
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
        bin.push(<Cell key={cellID} id={cellID} status={'dead'} />)
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

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({addRecipe}, dispatch)
// }
function mapStateToProps(state) {
  return {
    grid: state.grid
  };
}


export default connect(mapStateToProps)(Board)
