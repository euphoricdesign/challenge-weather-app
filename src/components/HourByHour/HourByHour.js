import React from 'react';
import Smcard from '../Smcard/Smcard';
import './HourByHour.scss'

export default function HourByHour({data}) {
  return (
    <div className='conteniner-hbh'>
      <Smcard data={data}/>
  </div>
  );
}
