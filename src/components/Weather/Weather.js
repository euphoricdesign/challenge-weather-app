import React from 'react';
import Header from "../Header/Header";
import Lgcard from "../Lgcard/Lgcard";
import HourByHour from "../HourByHour/HourByHour"
import DotLoader from "react-spinners/DotLoader"
import useWeather from '../../hook/useWeather';
import './Weather.scss';

export default function Weather() {
  const {data, setLat, setLong} = useWeather()

  return (
    <>
      {data ? (
        <>
          <Header city={data.timezone} setLat={setLat} setLong={setLong}/>

            <HourByHour data={data} />
            <Lgcard data={data}/>
            <div className='weather'>
              <div>
                <img 
                  className='icon'
                  src={`https://openweathermap.org/img/wn/${data.current.weather[0]["icon"]}@2x.png`} 
                  alt="" 
                />
                <span className='weather-text'>{data.current.weather[0].main}</span>
              </div>
              <p className='weather-num'>{Math.round(data.current.temp)}°</p>
            </div>
        
        </>
      ): <div className="loader">
      <DotLoader 
        size={80} 
        color={"#EEE5E9;"}
        />
    </div>}
    </>
  );
}
