import React, { useEffect, useState } from 'react';
import Header from "../Header/Header";
import Lgcard from "../Lgcard/Lgcard";
import './Weather.scss';

export default function Weather() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState();
  
  
  useEffect(() => { // Obtenemos longitud y latitud
    const fetchLocation =  () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    }
    fetchLocation();
  }, [])

  useEffect(() => {
    if (lat && long) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=44d95f92dd8b0f7ca8128054e136a315`)
        .then(res => res.json())
        .then(result => {
          setData(result);
        });
    }
  }, [lat, long]);

  // Del mismo modo que puedes usar el Hook de estado más de una vez, puedes usar varios efectos. Esto nos permite separar la lógica que no está 
  // relacionada en diferentes efectos

  return (
    <div>
      {data && (
        <>
          <Header city={data.timezone} setLat={setLat} setLong={setLong}/>
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
      )}
    </div>
  );
}
