import React, { Component } from 'react';
import { clear , randomize, start, toggle, step} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Generation from '../components/generation';

class Controller extends Component {
  constructor(props){
    super(props);
    this.startBtnText = this.startBtnText.bind(this);
    this.initializeAnimation = this.initializeAnimation.bind(this)
  }

  initializeAnimation(){
    // console.log('animate')
    this.props.start(this.props.coord)
    requestAnimationFrame(this.initializeAnimation)
  }
  componentDidMount() {
    // this.setState({
    //   request: requestAnimationFrame(this.initializeAnimation)
    // })
  }

  componentWillUnmount(){
    cancelAnimationFrame(this.state.request);
  }

  startBtnText(){
    //toggle the app state's on starting/pausing the board
    this.props.toggle()
    cancelAnimationFrame(this.initializeAnimation)
  }
  render(){
    let btnText = '';
    let stepBtnClass = '';
    if(this.props.startState){
      btnText = "waves-effect waves-light pause btn";
      stepBtnClass = 'btn disabled';
    } else{
      btnText = "waves-effect waves-light btn";
      stepBtnClass = 'waves-effect waves-light btn';
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 controller">
            <Generation generationNumber={this.props.generationNumber}/>
          </div>
          <div className="col s12 controller">
            <a onClick={this.startBtnText} className={btnText}>
              {this.props.startState === true ? 'Pause' : 'Start'}
            </a>
            <a onClick={this.props.clear} className="waves-effect waves-light btn">Clear</a>
            <a onClick={this.props.randomize}className="waves-effect waves-light btn">Randomize</a>
            <a onClick={() => this.props.step(this.props.coord)}className={stepBtnClass}>Step</a>

          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({clear,randomize,start,toggle,step}, dispatch)
}

export default connect(null,mapDispatchToProps)(Controller)
