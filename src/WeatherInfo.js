import React from "react";



export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>{props.data.date}, {props.data.description}</li>
              </ul>
      <div className="row">
         <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
          />
          <span className="temperature">{Math.round(props.data.temperature)}</span>
          <span className="unit">°C</span>
        </div>
       
      </div>
      <div className="forecast">
        <div className="row">
          {props.data.forecast.map((day, index) => (
            <div className="col" key={index}>
              <div className="forecast-day">{day.date}</div>
              <img
                src={day.iconUrl}
                alt={day.date}
              />
              <div className="forecast-temperature">
                {Math.round(day.temperature)}°C
              </div>
            </div>
          ))}
        </div>
      </div>
        <footer>
      This project was coded by <a href='https://github.com/oezlemcelik?tab=repositories'>Özlem Celik</a> and is <a href="https://github.com/oezlemcelik/weather-react-appjs" 
      target='_blank' rel='noopener noreferrer'> open-sourced on Github</a> and
      <a href="https://react-weather-app-oez.netlify.app/" target="_blank" rel="noopener noreferrer"> hosted on Netlify</a>
      </footer>
    </div>

  );
}