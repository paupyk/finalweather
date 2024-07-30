import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}º`;
    }
        function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}º`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


        return days[day];
}
    
    const forecast = props.data;
    return (
    <div>
     <div className="WeatherForecast-day">Thu
                {props.data.dt} </div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
        <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    {maxTemperature()}</span>
                <span className="WeatherForecast-temperature-min">
                    {minTemperature()}º</span>
</div>
</div>
);
}