import React, { Component } from 'react';

export default class Genereation extends Component{
  render(){
    return (
      <p className="generation btn">Generation: {this.props.generationNumber}</p>
    )
  }
}
