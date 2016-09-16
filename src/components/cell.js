import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <td
        className={this.props.status}
        id={this.props.id}
        >
      </td>
    )
  }
}
