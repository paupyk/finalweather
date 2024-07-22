import React from "react";
import FriendlyDate from "./FriendlyDate";

export default function WeatherInfo(props) {
    return ( 
    <div className="WeatherInfo">
  <h1>{weatherData.city}</h1>
  <ul>
  <li>
    <FriendlyDate date={props.data.date} />
    </li>
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
}