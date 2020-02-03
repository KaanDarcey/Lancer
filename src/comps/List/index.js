import React from 'react';
import './list.scss';

import ListItem from './ListItem';
import ListTitle from './ListTitle';

function List({items, titles}){
  return(
      <div className="list">
        <div id="" className="">
          {titles.map((t,i)=>{
              return <ListTitle {...t}/>
          })}
        </div>    
        <div id="" className="">
          {items.map((o,i)=>{
              return <ListItem {...o}/>
          })}
        </div>
      </div>      
  )
}

List.defaultProps = {
  items:[
    {
      projectName: "Project 1",
      clientName: "Client 1",
      endDate: "January 01, 2020",
      status: "100%",
    },
    {
      projectName: "Project 2",
      clientName: "Client 2",
      endDate: "January 01, 2020",
      status: "80%",
    },
  ],
  titles:[
    {
      projectName: "Default Title",
      clientName: "Default Title",
      endDate: "Default Title",
      status: "Default Title",    
    },
  ]

};

export default List;