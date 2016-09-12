import React, { Component } from 'react';
import Header from './header'
import RecipeBox from '../containers/recipebox';
import Footer from './footer'
import AddRecipeButton from '../containers/add_recipe';
import style from '../stylesheets/styles.scss';
var $ = require ('jquery')

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <RecipeBox />
        <Footer />
      </div>
    );
  }
}
