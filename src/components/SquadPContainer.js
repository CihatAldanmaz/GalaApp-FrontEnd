import React, { Component } from "react";
import SquadPlayerCard from "./SquadPlayerCard";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Deneme from "./stylecss/deneme.css";

export default class SquadPContainer extends Component {
  render() {
    return (
      <div style={Deneme}>
        <Form>
          <FormGroup>
            <Input className='mt-2'
              type="text"
              name="name"
              id="squadName"
              placeholder="Write your squad name"
            onChange = {(e) => this.props.handleSquadName(e)}/>
          </FormGroup>
        </Form>
        <Button color="danger" className="deneme" onClick = {(e) => this.props.postPlayer(e)}>
          Create Squad!
        </Button>
        {this.props.squadPlayers.map(player => {
          return <SquadPlayerCard squadPlayers={player} removeSquadPlayer = {this.props.removeSquadPlayer}/>;
        })}
      </div>
    );
  }
}
