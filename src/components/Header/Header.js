import React from 'react';
import { Stack, Form } from 'react-bootstrap';
import { cities } from '../../constants/index';
import './Header.scss';

export default function Header({ setLat, setLong, city }) {
  function eventHandler(e) {
    switch(e.target.value) {
      case '1':
        setLat(cities[0].lat);
        setLong(cities[0].long);
        break;
      case '2':
        setLat(cities[1].lat);
        setLong(cities[1].long);
        break;
      case '3': 
        setLat(cities[2].lat);
        setLong(cities[2].long);
        break
      case '4' :
        setLat(cities[3].lat);
        setLong(cities[3].long);
        break
      case '5' : 
        setLat(cities[4].lat);
        setLong(cities[4].long);
        break
      default: console.log('default');
    }
  };

  return (
    <Stack className='header' direction='horizontal'>
      {
        city === 'America/Argentina/San_Juan' || 'America/Argentina/Buenos_Aires'
      ?
        <h1 className='city'>{city.slice(18).replace('_', ' ')}</h1>
      :
        <h1 className='city'>{city.slice(18)}</h1>
      }
      <Form.Select onChange={eventHandler} aria-label="Default select example" className='selector ms-auto'>
        <option>Select a city</option>
        <option value="1">Tucumán</option>
        <option value="2">Buenos Aires</option>
        <option value="3">Cordoba</option>
        <option value="4">Mendoza</option>
        <option value="5">San Juan</option>
      </Form.Select>
    </Stack>
  );
}
