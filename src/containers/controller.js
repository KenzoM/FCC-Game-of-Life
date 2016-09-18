import React, { Component } from 'react';
import { clear , randomize, start} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Controller extends Component {
  constructor(props){
    super(props);
    this.state = {start : true}
    this.test = this.test.bind(this);
  }
  componentDidMount() {
    this.props.start(this.props.coord)
  }

  test(){
    this.setState({start: this.state.start === true ? false : true})
    this.props.start(this.props.coord)
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 controller">
            <a onClick={this.test} className="waves-effect waves-light btn">
              {this.state.start === true ? 'Pause' : 'Start'}
            </a>
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
