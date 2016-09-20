import React, { Component } from 'react';
import { clear , randomize, start, toggle, step} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Generation from '../components/generation';
import Info from '../components/info';

class Controller extends Component {
  constructor(props){
    super(props);
    this.state = {request: 0}
    this.startBtn = this.startBtn.bind(this);
    this.clearBtn = this.clearBtn.bind(this);
    this.initializeAnimation = this.initializeAnimation.bind(this);
  }
  componentDidMount() {
    this.setState({
      request: requestAnimationFrame(this.initializeAnimation)
    })
  }

  initializeAnimation(){
    this.props.start(this.props.coord)
    this.setState({
      request: requestAnimationFrame(this.initializeAnimation)
    })
  }


  startBtn(){
    //toggle the requestAnimationFrame state
    if (this.props.startState){
      cancelAnimationFrame(this.state.request)
    }
    else{
      requestAnimationFrame(this.initializeAnimation)
    }
    //toggle the app state's on starting/pausing the board
    this.props.toggle()
  }
  clearBtn(){
    cancelAnimationFrame(this.state.request)
    this.props.clear()
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
            <a onClick={this.startBtn} className={btnText}>
              {this.props.startState === true ? 'Pause' : 'Start'}
            </a>
            <a onClick={this.clearBtn} className="waves-effect waves-light btn">Clear</a>
            <a onClick={this.props.randomize}className="waves-effect waves-light btn">Randomize</a>
            <a onClick={() => this.props.step(this.props.coord)}className={stepBtnClass}>Step</a>
            <div className="fixed-action-btn">
              <Info />
            </div>
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
