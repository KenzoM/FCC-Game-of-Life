import React, { Component } from 'react';
import { clear , randomize, start, toggle, step, example} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Generation from '../components/generation';

class Controller extends Component {
  constructor(props){
    super(props);
    this.startBtn = this.startBtn.bind(this);
    this.clearBtn = this.clearBtn.bind(this);
    this.exampleBtn = this.exampleBtn.bind(this);
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
      cancelAnimationFrame(this.state.request);
    }
    else{
      requestAnimationFrame(this.initializeAnimation);
    }
    //toggle the app state's on starting/pausing the board
    this.props.toggle();
  }
  clearBtn(){
    cancelAnimationFrame(this.state.request);
    this.props.clear();
  }

  exampleBtn(){
    if (!this.props.startState){
      this.props.example();
    }
  }
  render(){
    let btnText = '';
    let disabledClass = '';
    let exampleBtn = '';
    if(this.props.startState){
      btnText = "waves-effect waves-light pause btn";
      disabledClass = 'btn disabled';
      exampleBtn = 'btn disabled';
    } else{
      btnText = "waves-effect waves-light btn";
      disabledClass = 'waves-effect waves-light btn setBtn';
      exampleBtn = 'waves-effect waves-light btn exampleBtn';
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
            <a onClick={() => this.props.step(this.props.coord)}className={disabledClass}>Step</a>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({clear,randomize,start,toggle,step,example}, dispatch)
}

export default connect(null,mapDispatchToProps)(Controller)
