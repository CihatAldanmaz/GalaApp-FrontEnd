import React, { Component } from 'react'
import SVG from 'react-inlinesvg';
import './stylecss/deneme.css'

  
export default class SquadPlayerCard extends Component {
  render() {
    return (
        
      <div className="card2" onClick = {(e) => this.props.removeSquadPlayer(e, this.props.squadPlayers)}>
      <div className="card-image">
      <img src={this.props.squadPlayers.img} />
      </div>
      <div className="card-text">
        <h2>{this.props.squadPlayers.name}</h2>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">POSITION</div>
          <div className="type">{this.props.squadPlayers.position}</div>
        </div>
        <div className="stat border">
          <div className="value">AGE</div>
          <div className="type">{this.props.squadPlayers.age}</div>
        </div>
        <div className="stat">
          <SVG src={this.props.squadPlayers.flagicon} weight = "20" height="50"/>
        </div>
      </div>
    </div>
     
     
     
    )

  }
}
