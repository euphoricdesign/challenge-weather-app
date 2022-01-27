import React from 'react';
import './Lgcard.scss';

export default function Lgcard({data}) {
  let unixTimestamp1 = data.daily[1].dt;
  let date1 = new Date(unixTimestamp1*1000);

  let unixTimestamp2 = data.daily[2].dt;
  let date2 = new Date(unixTimestamp2*1000);

  let unixTimestamp3 = data.daily[3].dt;
  let date3 = new Date(unixTimestamp3*1000);

  let unixTimestamp4 = data.daily[4].dt;
  let date4 = new Date(unixTimestamp4*1000);

  let unixTimestamp5 = data.daily[5].dt;
  let date5 = new Date(unixTimestamp5*1000);

  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="glasslg">
      <div className='card-lg'>
        <div className='day'>
          {date1.toLocaleDateString("es-ES", options).slice(0,3)}
          <span>{Math.round(data.daily[1].temp.day) + "°"}</span>
          <img 
            className='icon'
            src={`https://openweathermap.org/img/wn/${data.daily[1].weather[0]["icon"]}@2x.png`} 
            alt="" 
          />
        </div>
        <div className='day'>
          {date2.toLocaleDateString("es-ES", options).slice(0,3)}
          <span>{Math.round(data.daily[2].temp.day) + "°"}</span>
          <img 
            className='icon'
            src={`https://openweathermap.org/img/wn/${data.daily[2].weather[0]["icon"]}@2x.png`} 
            alt="" 
          />
        </div>
        <div className='day'>
          {date3.toLocaleDateString("es-ES", options).slice(0,3)}
          <span>{Math.round(data.daily[3].temp.day) + "°"}</span>
          <img 
            className='icon'
            src={`https://openweathermap.org/img/wn/${data.daily[3].weather[0]["icon"]}@2x.png`} 
            alt="" 
          />
        </div>
        <div className='day'>
          {date4.toLocaleDateString("es-ES", options).slice(0,3)}
          <span>{Math.round(data.daily[4].temp.day) + "°"}</span>
          <img 
            className='icon'
            src={`https://openweathermap.org/img/wn/${data.daily[4].weather[0]["icon"]}@2x.png`} 
            alt="" 
          />
        </div>
        <div className='day'>
          {date5.toLocaleDateString("es-ES", options).slice(0,3)}
          <span>{Math.round(data.daily[5].temp.day) + "°"}</span>
          <img 
            className='icon'
            src={`https://openweathermap.org/img/wn/${data.daily[5].weather[0]["icon"]}@2x.png`} 
            alt="" 
          />
        </div>
      </div>
    </div>
  );
}
