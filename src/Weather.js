import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";



export default function Weather (props){
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {
        console.log(response.data);

        const date = new Date(response.data.daily[0].time * 1000);
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = daysOfWeek[date.getDay()];
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${day} ${hours}:${minutes}`;
        setWeatherData({
            ready:true,
            temperature:response.data.daily[0].temperature.day,
            humidity: response.data.daily[0].temperature.humidity,
            date: formattedTime,
            description: response.data.daily[0].condition.description,
            iconUrl:"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
            wind: response.data.daily[0].wind.speed,
            city: response.data.city
             

        });
    }

    if(weatherData.ready){
    return(
    <div className="Weather">
       
        <form>
            <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city.." 
            className="form-control" autoFocus="on" />
            </div>

            <div className="col-3">
            <input type="submit" value="Search" 
            className="btn btn-primary w-100" />
           </div>
            </div>
         </form>
   
           <h1>{weatherData.city}</h1>
        <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
            <div className="col-6"> 
                <img 
                src={weatherData.iconUrl} 
                alt={weatherData.description}/>
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span> 
                </div>
                
                <div className="col-6">
                    <ul>
                          <li>Humidity: {weatherData.humidity}%</li>

                          <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>

    );
} else {
    const apiKey = "bb0741b0aa475cabbe3bbdftd8oa9bfa";
    let apiUrl =`https://api.shecodes.io/weather/v1/forecast?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    

    return "Loading...";
}
}