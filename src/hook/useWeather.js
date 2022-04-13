// import React from "react";
import { useEffect, useState } from 'react'


const useWeather = () => {
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

  return {data, setLat, setLong}
}



export default useWeather