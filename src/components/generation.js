import React, { Component } from 'react';

export default class Genereation extends Component{
  render(){
    return (
      <p className="generation btn-large">Generation: {this.props.generationNumber}</p>
    )
  }
}
