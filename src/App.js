import React from "react";
import { Container } from "react-bootstrap";
import './App.scss';
import Weather from "./components/Weather/Weather";






function App() {
  return (
    <>
      <Container className="container">
        <Weather />  
      </Container>
    </>
  );
}

export default App;
