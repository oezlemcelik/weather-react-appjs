import React from "react";


export default function WeatherInfo(props) {
  return (
    <div>
    <h1>{props.date.city}</h1>
        <ul>
            <li>{props.date.date}</li>
            <li className="text-capitalize">{props.date.description}</li>
        </ul>
        <div className="row">
            <div className="col-6"> 
                <img
                src={props.date.iconUrl ? props.date.iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"}
                 alt={props.date.description}/>
                 <span className="temperature">{Math.round(props.date.temperature)}</span>
                <span className="unit">°C</span> 
                </div>
                
                <div className="col-6">
                    <ul>
                          <li>Humidity: {props.date.humidity}%</li>

                          <li>Wind: {props.date.wind} km/h</li>
                    </ul>
                </div>
            </div>
   </div>
  );
}