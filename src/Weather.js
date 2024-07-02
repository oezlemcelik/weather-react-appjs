import React, { useState, useEffect, useCallback } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  
          const [weatherData, setWeatherData] = useState({ ready: false });
          const [city, setCity] = useState(props.defaultCity || '');

          const handleResponse = useCallback((response) => {
            const now = new Date();
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const day = daysOfWeek[now.getDay()];
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${day} ${hours}:${minutes}`;

            setWeatherData({
              ready: true,
              temperature: response.data.daily[0].temperature.day,
              humidity: response.data.daily[0].temperature.humidity,
              date: formattedTime,
              description: response.data.daily[0].condition.description,
              iconUrl: response.data.daily[0].condition.icon_url,
              wind: response.data.daily[0].wind.speed,
              city: response.data.city,
              forecast: response.data.daily.slice(1, 6).map((day, index) => ({
              date: daysOfWeek[(now.getDay() + index + 1) % 7],
              temperature: day.temperature.day,
              iconUrl: day.condition.icon_url,

                
              }))
            });
          }, []);
  

          const search = useCallback(() => {
            const apiKey = "bb0741b0aa475cabbe3bbdftd8oa9bfa";
            let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
          }, [city, handleResponse]);

        useEffect(() => {
          if (city.trim() !== '') {
            search();
          }
        }, [city, search]);

        function handleSubmit(event) {
          event.preventDefault();
          if (city.trim() !== '') {
            search();
          }
        }

          function handleCityChange(event) {
            setCity(event.target.value);
          }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
            <input type="submit" class="btn btn-primary w-100" value="Search"></input>
            
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    return "Loading...";
  }
}
