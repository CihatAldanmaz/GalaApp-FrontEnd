import React, { Component } from 'react'
import { Table } from "reactstrap";


export default class AllSquads extends Component {
    render() {
        console.log(this.props.allsquads)
        return (
            <div>

{this.props.allsquads.map(squad => (
            <Table striped>
            <thead>
              <tr>
                <th>{squad.name}</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            {squad.players.map(pp => (
                <tbody>
            
            <tr>
            <th scope="row">1</th>
  <td>{pp.name}</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
         
        </tbody>
      
            ))}
        </Table>
        ))}        
                
            </div>
        )
    }
}
