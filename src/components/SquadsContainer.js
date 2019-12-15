import React, { Component } from "react";
import SquadCard from "./SquadCard";
import { Table,Button } from "reactstrap";

// export default class SquadsContainer extends Component {
//   render() {
//       console.log(this.props.squads)
//     return (
//       <div>
//         <Table striped>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.squads.players.map(player => (
//               <tr>
//                 <th scope="row">1</th>
//                 <td>{player.name}</td>
//                 <td>{player.position}</td>
//                 <td>{player.country}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     );
//   }
// }

export default class SquadsContainer extends Component {

hade = () => {
    {this.props.players.map(p => (
        p.players.map(pp => (
            console.log(pp.name)
        ))
    ))}
}


  render() {
      
     
    return (
<div>
        {this.props.players.map(p => (
            <Table striped>
            <thead>
              <tr>
                <th>{p.name}</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              <Button onClick = {(e) => this.props.deleteSquad(e, p)}color="danger">Delete This Squad</Button>{' '}
              </tr>
            </thead>
            {p.players.map(pp => (
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
   
   
   
   );
  }
}
