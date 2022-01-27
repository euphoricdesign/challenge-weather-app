import React from "react";
import { Container } from "react-bootstrap";
import './App.scss'
import Weather from "./components/Weather/Weather";
// import HourByHour from "./components/HourByHour/HourByHour";
// import Lgcard from "./components/Lgcard/Lgcard";




function App() {

  // const API_KEY = '44d95f92dd8b0f7ca8128054e136a315'

  return (
    <>
      <div className="hero-img"></div>
      <Container className="container">
        
        <Weather />  
      </Container>
    </>
  );
}

export default App;
