import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      
      <div className='container'>
      <Weather defaultCity="Vienna" />

      <footer>
    This project was coded by <a href='https://github.com/oezlemcelik?tab=repositories'>Özlem Celik</a> and is <a href="https://github.com/oezlemcelik/weather-react-appjs" 
      target='_blank' rel='noopener noreferrer'> open-sourced on Github</a> and
      <a href="https://react-weather-app-oez.netlify.app/" target="_blank" rel="noopener noreferrer"> hosted on Netlify</a>
      </footer>
      </div>
    </div>
  );
}


