import React from 'react';
import './headerBar.scss';
import Divider from '../Divider';

function Header({headerTitle, icon, iconTitle, btn}){
  return(
    <div className="header">
      <div className="row">
        <h1>{headerTitle}</h1>
        <div className="iconCont">
          <span className="iconTitle">{iconTitle}</span>
          <i className="icon">{icon}</i>
        </div>
        <div className="btnCont">
          {btn}
        </div>
      </div>
      <Divider/>
    </div>
  )
}

Header.defaultProps = {
  headerTitle:'Default Header'
}

export default Header;