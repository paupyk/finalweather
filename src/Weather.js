import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form> 
                <input type="search" placeholder="Enter a city.." className="form-control" />
                <input type="submit" value="Search" className="btn btn-primary" />
            </form>
            <h1>Los Angeles</h1>
            <ul>
                <li>Sunday 4:20</li>
                <li>Sunny</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" />
                    6℃
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: 47%</li>
                        <li>Wind: 9 mph</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}