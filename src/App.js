import React, { Component } from 'react';
import NavBar from './components/NavBar';
import WeatherBox from './components/WeatherBox';
import { weatherConfig } from './api/weatherConfig';
import axios from 'axios';

class App extends Component {
  state = {
    unit: 'C',
    city: '',
    data: ''
  }
  changeUnit = (unit) => {
    this.setState({
      unit
    })
  }
  getWeather = (city) => {
    if (city !== '') {
      axios.get(weatherConfig(city))
        .then(res => {
          this.setState({
            data: res.data
          });
        });

    }
  }
  setCity = (city) => {
    this.setState({
      city
    });
    this.getWeather(city)
  }
 
  render() {
    return (
      <div className="App">
        <NavBar changeUnit={this.changeUnit} setCity={this.setCity} />
        <WeatherBox data={this.state.data} unit={this.state.unit} />
        <div className="copy-right">Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></div>
      </div>
    );
  }
}


export default App;
