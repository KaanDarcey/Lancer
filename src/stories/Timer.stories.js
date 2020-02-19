import React from 'react';
import Timer from '../comps/Timer';

import {FaPlayCircle} from 'react-icons/fa';

export default {
  title: 'Timer',
  component: Timer,
};

export const defaultTimer = () => {
  return <Timer />
};

export const TimerIcon = () => {
  return <Timer
    icon={<FaPlayCircle/>}
    hh="00"
    mm="01"
    ss="08"
  />
}