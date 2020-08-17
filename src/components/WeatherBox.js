import React, { Component } from 'react';
import WindImage from '../img/wind.svg';
import '../css/WeatherBox.min.css'

class WeatherBox extends Component {
    render() {
        const { data } = this.props;
        const weather = data !== '' ? (
            <div>
                <div className="weather-box card">
                    <div className="info">
                        <h1 className="title">{data.location.name + " " + data.location.country} Weather</h1>
                        <p>{data.location.localtime} Local Time</p>
                        <h2>{this.props.unit === 'C' ? (data.current.temp_c) : (data.current.temp_f)}&#176;</h2>
                        <h3>{data.current.condition.text}</h3>
                    </div>
                    <div className="icon">
                        <img src={data.current.condition.icon} alt="weather icon" />
                    </div>
                </div>
                <div className="wind-box card">
                    <div className="info">
                        <h2 className="title">Wind</h2>
                        <p>Direction: {data.current.wind_dir}</p>
                        <p>Speed: {this.props.unit === 'C' ? (data.current.wind_kph + ' km/h') : (data.current.wind_mph + ' m/h')}</p>
                    </div>
                    <div className="icon">
                        <img src={WindImage} alt="wind icon" />
                    </div>
                </div>
            </div>
        ) : (
                null
            );
        return (
            <div className="weather-boxes">
                {weather}
            </div>
        )
    }
}

export default WeatherBox;