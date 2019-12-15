import React, { Component } from "react";
import PlayerCard from "./PlayerCard";
import Grid from "@material-ui/core/Grid";

export default class PlayersContainer extends Component {
    divStyle={
        
        border:'1px solid red',
        width:'100%',
        float: 'left',
        
        position:'relative'
      };
  render() {
    return (
      <div style={this.divStyle}>
        <Grid container spacing={80} style={{ padding: 24 }}>
          {this.props.players.map(player => (
            <Grid item xs={6}>
              <PlayerCard
                player={player}
                key={player.id}
                handlePlayer={this.props.handlePlayer}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
