import React, { Component } from 'react';
// import from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Board extends Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.grid)
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 board"></div>
            <table id="simple-board">
               <tbody>

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
