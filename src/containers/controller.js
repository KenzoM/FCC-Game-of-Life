import React, { Component } from 'react';
import { clear , randomize} from '../actions/index';
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
            <a className="waves-effect waves-light btn" onClick={this.test}>Start</a>
            <a onClick={this.props.clear} className="waves-effect waves-light btn">Clear</a>
            <a onClick={this.props.randomize}className="waves-effect waves-light btn">Randomize</a>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({clear,randomize}, dispatch)
}


export default connect(null,mapDispatchToProps)(Controller)
