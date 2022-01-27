import React from 'react';
import { Stack, Form } from 'react-bootstrap';
import './Header.scss' 

export default function Header(props) {

  const ciudades = [
    {
      name: 'Tucumán',
      lat: -26.8198,
      long: -65.2169
    },
    {
      name: 'Buenos Aires',
      lat: -34.6083,
      long: -58.3712
    },
    {
      name: 'Cordoba',
      lat: -31.417,
      long: -64.183
    },
    {
      name: 'Mendoza',
      lat: -32.89084,
      long: -68.82717
    },
    {
      name: 'San juan',
      lat: -31.5375,
      long: -68.53639
    }

  ]


  function eventHandler(e) {
    switch(e.target.value) {
      case '1' : {
        props.setLat(ciudades[0].lat)
        props.setLong(ciudades[0].long)
      }
      break
      case '2' : {
        props.setLat(ciudades[1].lat)
        props.setLong(ciudades[1].long)
      }
      break
      case '3': {
        props.setLat(ciudades[2].lat)
        props.setLong(ciudades[2].long)
      }
      break
      case '4' : {
        props.setLat(ciudades[3].lat)
        props.setLong(ciudades[3].long)
      }
      break
      case '5' : {
        props.setLat(ciudades[4].lat)
        props.setLong(ciudades[4].long)
      }
      break
      default: console.log('default');
    }
  }

  return (
    <Stack className='header' direction='horizontal'>
      {
          props.city === 'America/Argentina/San_Juan' || 'America/Argentina/Buenos_Aires'
          ? 
          <h1 className='city'>{props.city.slice(18).replace('_', ' ')}</h1>
          : 
          <h1 className='city'>{props.city.slice(18)}</h1>
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
