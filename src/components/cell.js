import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(props){
    super(props);

  }
  render(){
    const status = this.props.status === 1 ? 'alive' : 'dead';
    return (
      <td
        className={status}
        id={this.props.id}
        >
      </td>
    )
  }
}
