import React from "react";
import { Container } from "react-bootstrap";
import './App.scss';
import Weather from "./components/Weather/Weather";






function App() {
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
