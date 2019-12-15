import React, { Component } from "react";
import Navi from "./Navi";
import NNNavi from "./components/NNNavi";
import PlayersContainer from "./components/PlayersContainer";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import SquadPContainer from "./components/SquadPContainer";
import { switchCase } from "@babel/types";
import SquadsContainer from "./components/SquadsContainer";
import { Route, Switch } from "react-router-dom";
import AllSquads from "./components/AllSquads";

export default class Dashboard extends Component {
  state = {
    players: [],
    squadPlayers: [],
    squadName: "",
    squad_id: "",
    categories: ["HOME", "My Squads", "All Squads"],
    name: [],
    ourplayers: [],
    allsquads: []
  };

  componentDidMount() {
    this.getAllPlayers();
    this.getSquads();
    this.getUserSquads();
  }

  getAllPlayers = () => {
    axios.get("https://galaapp.herokuapp.com/players/").then(resp => {
      this.setState({
        players: resp.data
      });
    });
  };

  getSquads = () => {
    axios.get("https://galaapp.herokuapp.com/squads/").then(resp =>
      this.setState({
        allsquads: resp.data
      })
    );
  };

  getUserSquads = async () => {
    axios
      .get(`https://galaapp.herokuapp.com/users/${this.props.user_id}`, {
        headers: {
          Authorization: this.props.token
        }
      })
      .then(resp =>
        resp.data.squads.map(squad => {
          this.setState({
            ourplayers: [...this.state.ourplayers, squad]
          });
        })
      );
  };

  removeSquadPlayer = (e, player) => {
    e.preventDefault();

    let newSquad = this.state.squadPlayers.filter(p => p.id !== player.id);
    this.setState({
      squadPlayers: newSquad
    });
  };

  handleSquadName = e => {
    this.setState({
      squadName: e.target.value
    });
  };

  deleteSquad = (e,squad) => {
    e.preventDefault()
    let mysquad = this.state.ourplayers.filter(m => m.id !== squad.id);
    let allsquad = this.state.allsquads.filter(a => a.id !== squad.id)
    this.setState({
      ourplayers: mysquad,
      allsquads: allsquad
    });
    
    axios.delete(`https://galaapp.herokuapp.com/squads/${squad.id}`)
    .then(resp => {console.log(resp.data)})
    
  }

  postPlayer = async e => {
    
    if (this.state.squadPlayers.length >= 11) {
      await axios
        .post("https://galaapp.herokuapp.com/squads", {
          name: this.state.squadName,
          user_id: this.props.user_id
        })
        .then(response =>
          this.setState({
            squad_id: response.data.id,
          })
        );

      await this.state.squadPlayers.map(player =>
        axios({
          method: "post",
          responseType: "json",
          url: `https://galaapp.herokuapp.com/playersquads`,
          data: {
            player_id: player.id,
            squad_id: this.state.squad_id
          }
        })
        
      );

      await window.alert(`You Created your squad ${this.state.squadName}`);
      this.setState(
        {
          squadPlayers: [],
         
        }
      );
    } else {
      window.alert("You have to pick 11 players at least");
    }

    this.getUserSquads()
    this.getSquads()
  };

  addPlayerToSquad = player => {
    if (!this.state.squadPlayers.includes(player)) {
      this.setState({
        squadPlayers: [...this.state.squadPlayers, player]
      });
    } else {
      window.alert(`You already picked ${player.name}`);
    }
  };

  handlePlayer = (e, player) => {
    if (this.state.squadPlayers.length < 11) {
      this.addPlayerToSquad(player);
    } else {
      window.alert("You can't pick more than 11 players");
    }
  };

  render() {
    return (
      <div>
        <NNNavi logOutUser={this.props.logOutUser} />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <Grid container>
                  <Grid item xs={6}>
                    <PlayersContainer
                      {...props}
                      players={this.state.players}
                      handlePlayer={this.handlePlayer}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <SquadPContainer
                      squadPlayers={this.state.squadPlayers}
                      postPlayer={this.postPlayer}
                      handleSquadName={this.handleSquadName}
                      removeSquadPlayer={this.removeSquadPlayer}
                    />
                  </Grid>
                </Grid>
              </div>
            )}
          ></Route>
        </Switch>

        <Grid container>
          <Grid item xs={12}>
            <Switch>
              <Route
                exact
                path="/mysquads"
                render={props => (
                  <SquadsContainer {...props} players={this.state.ourplayers} deleteSquad = {this.deleteSquad} />
                )}
              ></Route>
              <Route
                exact
                path="/allsquads"
                render={props => (
                  <AllSquads {...props} allsquads={this.state.allsquads} />
                )}
              ></Route>
            </Switch>
          </Grid>
        </Grid>
      </div>
    );
  }
}
