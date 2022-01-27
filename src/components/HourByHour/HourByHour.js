import React from 'react';
import { Stack } from 'react-bootstrap';
import Smcard from '../Smcard/Smcard';
import './HourByHour.scss'

export default function HourByHour() {
  return (
    <Stack className='conteniner-hbh' direction="horizontal" gap={3}>
      <Smcard />
      <Smcard />
      <Smcard />
      <Smcard />
      <Smcard />
  </Stack>
  );
}
