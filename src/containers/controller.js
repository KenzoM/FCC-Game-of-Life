import React, { Component } from 'react';
import { clear , randomize, start, toggle} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Generation from '../components/generation';

class Controller extends Component {
  constructor(props){
    super(props);
    this.state = {start : true}
    this.startBtnText = this.startBtnText.bind(this);
    this.test = this.test.bind(this)
  }

  test(){
    this.props.start(this.props.coord)
    requestAnimationFrame(this.test)
  }
  componentDidMount() {
    requestAnimationFrame(this.test)
  }

  startBtnText(){
    //toggle Start and Pause render btn
    this.setState({start: this.state.start === true ? false : true})
    //toggle the app state's on start/pause the board
    this.props.toggle()
  }
  render(){
    let kenzo = ''
    if(this.state.start){
      kenzo = "waves-effect waves-light pause btn"
    } else{
      kenzo = "waves-effect waves-light btn"
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 controller">
            <Generation generationNumber={this.props.generationNumber}/>
          </div>
          <div className="col s12 controller">
            <a onClick={this.startBtnText} className={kenzo}>
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
  return bindActionCreators({clear,randomize,start,toggle}, dispatch)
}

export default connect(null,mapDispatchToProps)(Controller)
