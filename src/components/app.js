import React, { Component } from 'react';
import Header from './header'
import Board from '../containers/board'
import style from '../stylesheets/styles.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Board />
      </div>
    );
  }
}
