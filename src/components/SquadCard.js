import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    
          <div>
          <td>{props.squad.name}</td>
  <td>{props.squad.country}</td>
          <td>@mdo</td>
          </div>
        
  );
}

export default Example;