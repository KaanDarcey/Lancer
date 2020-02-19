import React from 'react';
import './timer.scss';

function Timer({icon,hh,mm,ss}){
  return(
    <div className="timerCont">
      <h1 className="timerHeading">Begin tracking progress</h1>
      <div className="timer">
      <button className="iconBtn">
      <i className="icon">{icon}</i>
      </button>
      <div className="time">
        <span>{hh}:</span>
        <span>{mm}:</span>
        <span>{ss}</span>
      </div>
      </div>
    </div>
  )
}

Timer.defaultProps = {

}

export default Timer;