import React, { Component } from 'react'
import './stylecss/style.css'
import SVG from 'react-inlinesvg';


export default class PlayerCard extends Component {

  

  render() {
    return (
      <div  className="card" onClick = {(e) => this.props.handlePlayer(e,this.props.player)}>
      <div class="card-image">
      <img src={this.props.player.img} />
      </div>
      <div class="card-text">
        <h2>{this.props.player.name}</h2>
      </div>
      <div class="card-stats">
        <div class="stat">
          <div class="value">POSITION</div>
          <div class="type">{this.props.player.position}</div>
        </div>
        <div class="stat border">
          <div class="value">AGE</div>
          <div class="type">{this.props.player.age}</div>
        </div>
        <div class="stat">
          <SVG src={this.props.player.flagicon} weight = "20" height="50"/>
        </div>
      </div>
    </div>
    )
  }
}
