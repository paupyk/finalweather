import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
    console.log(props);
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => { 
        setLoaded(false);
    }, [props.coordinates]);
    
function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load() {
    const apiKey = "4o0269f4b7t3d5f7f0cfc4a0af394b27";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.longitude}&lat=${props.coordinates.latitude}&key=${apiKey}&units=imperial`;
    }
    if (loaded) {
        console.log(props);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                     })}
                </div>
            </div>
        );
    } else {
    const apiKey = "4o0269f4b7t3d5f7f0cfc4a0af394b27";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.longitude}&lat=${props.coordinates.latitude}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
        
        return null;
    }
}