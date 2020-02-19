import React from 'react';
import './search.scss';

import {FaSearch} from 'react-icons/fa';

function Search({icon}){
  return(
    <div className="search">
      <i className="icon">{icon}</i>
      <input type="text" placeholder="Search.." className="searchInput"/>
    </div>
  )
}

Search.defaultProps = {
  icon:<FaSearch/>
}

export default Search;