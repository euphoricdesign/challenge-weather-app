import React from 'react';
import './Smcard.scss';

export default function Smcard({data}) {

  let unixTimestamp1 = data.hourly[1].dt;
  let time1 = new Date(unixTimestamp1*1000);

  let unixTimestamp2 = data.hourly[2].dt;
  let time2 = new Date(unixTimestamp2*1000);

  let unixTimestamp3 = data.hourly[3].dt;
  let time3 = new Date(unixTimestamp3*1000);

  let unixTimestamp4 = data.hourly[4].dt;
  let time4 = new Date(unixTimestamp4*1000);

  let unixTimestamp5 = data.hourly[5].dt;
  let time5 = new Date(unixTimestamp5*1000);



  const options = {  hour: 'numeric', minute: "numeric",  };

console.log("time:::::::", time1.toLocaleDateString("es-ES", options))

  return (
    <>
      <div className="glass">
        <div className='hour'>
          {time1.toLocaleDateString("es-ES", options).slice(10)}
          <span className='hbh'>{Math.round(data.hourly[1].temp) + "°"}</span>
          <img 
            className='icon'
            src={`https://openweathermap.org/img/wn/${data.hourly[1].weather[0]["icon"]}@2x.png`} 
            alt="" 
          />
        </div>
      </div>
      <div className="glass">
        <div className='hour'>
          {time2.toLocaleDateString("es-ES", options).slice(10)}
          <span className='hbh'>{Math.round(data.hourly[2].temp) + "°"}</span>
          <img 
            className='icon'
            src={`https://openweathermap.org/img/wn/${data.hourly[2].weather[0]["icon"]}@2x.png`} 
            alt="" 
          />
        </div>
      </div>
      <div className="glass">
        <div className='hour'>
          {time3.toLocaleDateString("es-ES", options).slice(10)}
          <span className='hbh'>{Math.round(data.hourly[3].temp) + "°"}</span>
          <img 
            className='icon'
            src={`https://openweathermap.org/img/wn/${data.hourly[3].weather[0]["icon"]}@2x.png`} 
            alt="" 
          />
        </div>
      </div>
      <div className="glass">
        <div className='hour'>
          {time4.toLocaleDateString("es-ES", options).slice(10)}
          <span className='hbh'>{Math.round(data.hourly[4].temp) + "°"}</span>
          <img 
            className='icon'
            src={`https://openweathermap.org/img/wn/${data.hourly[4].weather[0]["icon"]}@2x.png`} 
            alt="" 
          />
        </div>
      </div>
      <div className="glass">
        <div className='hour'>
          {time5.toLocaleDateString("es-ES", options).slice(10)}
          <span className='hbh'>{Math.round(data.hourly[5].temp) + "°"}</span>
          <img 
            className='icon'
            src={`https://openweathermap.org/img/wn/${data.hourly[5].weather[0]["icon"]}@2x.png`} 
            alt="" 
          />
        </div>
      </div>
    </>
  );
}
