import React from 'react';
import './list.scss';

import ListItem from './ListItem';

function List({items, listTitle}){
  return(
    <div>
        <h1>{listTitle}</h1>
        <table className="list">
          
          {items.map((o,i)=>{
                  return <ListItem {...o}/>
              })}
          
        </table>
    </div>
  )
}

List.defaultProps = {
  items:[
    {
      listItem01:"Default",
      listItem02:"Default",
      listItem03:"Default",
      listItem04:"Default"
    },
    {
      listItem01:"Default",
      listItem02:"Default",
      listItem03:"Default",
      listItem04:"Default"
    },
    {
      listItem01:"Default",
      listItem02:"Default",
      listItem03:"Default",
      listItem04:"Default"
    },
    {
      listItem01:"Default",
      listItem02:"Default",
      listItem03:"Default",
      listItem04:"Default"
    },
    {
      listItem01:"Default",
      listItem02:"Default",
      listItem03:"Default",
      listItem04:"Default"
    },
    {
      listItem01:"Default",
      listItem02:"Default",
      listItem03:"Default",
      listItem04:"Default"
    }
  ],
};

export default List;