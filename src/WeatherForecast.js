import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                <WeatherForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = "6a48a550fc04f170639e60d52b8a6bc5";
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
        
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}
