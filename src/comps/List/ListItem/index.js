import React from 'react';
import './listItem.scss';

function ListItem({listItem01,listItem02,listItem03,listItem04}){
  return(
    <tr>
      <td>{listItem01}</td>
      <td>{listItem02}</td>
      <td>{listItem03}</td>
      <td className="checkbox">{listItem04}</td>
    </tr>
  )
}

ListItem.defaultProps = {
  items:[
    {
    }

  ]
};

export default ListItem;