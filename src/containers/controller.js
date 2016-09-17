import React, { Component } from 'react';
import { clear , randomize, start} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Controller extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 controller">
            <a onClick={this.props.start} className="waves-effect waves-light btn">Start</a>
            <a onClick={this.props.clear} className="waves-effect waves-light btn">Clear</a>
            <a onClick={this.props.randomize}className="waves-effect waves-light btn">Randomize</a>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({clear,randomize,start}, dispatch)
}


export default connect(null,mapDispatchToProps)(Controller)
