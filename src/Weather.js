import React, { useState } from "react";
import FormattedDate from "./FriendlyDate";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.condition.description,
            city: response.data.city,
            iconURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        });
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <FormattedDate date={weatherData.date} />
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">

                        <div className="clearfix">
                            <img src={weatherData.iconURL} alt={weatherData.description} className="float-left" />
                            <div className="float-left">
                                <span className="temperature">
                                    {Math.round(weatherData.temperature)}
                                </span>
                                <span className="unit">℃</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 0%</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} mph</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "dt1bb39f7643d6635aece74b30o7b493";
        let city = "Los Angeles";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }
}