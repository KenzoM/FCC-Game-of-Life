import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'
import Board from './board'
import Controller from './controller'

import style from '../stylesheets/styles.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Controller />
        <Board />
      </div>
    );
  }
}
