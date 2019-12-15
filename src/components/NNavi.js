import React, { Component } from "react";
import './stylecss/navi.css'
export default class NNavi extends Component {



  render() {
    return (
      <div>
        <div class="navi">
          <div class="menu">
            <ul>
              <li>
                <a class="active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#news">My Squads</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
