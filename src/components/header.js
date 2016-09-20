import React, { Component } from 'react'
const url = "https://www.freecodecamp.com/challenges/build-the-game-of-life"
export default class Header extends Component {
  render(){
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li><a>Example one</a></li>
          <li className="divider"></li>
          <li><a>Example two</a></li>
          <li className="divider"></li>
          <li><a>Example three</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper container">
            <a href={url} className="brand-logo ">FCC Game of Life</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="https://github.com/Neotriz/FCC-Game-of-Life">Github</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Wiki on Game of Life</a></li>
              <li>
                <a className="dropdown-button"
                  data-activates="dropdown1">Examples
                    <i className="material-icons right">arrow_drop_down</i>
                  </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
