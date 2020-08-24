import React, { Component } from 'react';
import NavBar from './components/NavBar';
import WeatherBox from './components/WeatherBox';
import Loader from './components/Loader';
import NetworkError from './components/NetworkError';
import { weatherConfig } from './api/weatherConfig';
import axios from 'axios';

class App extends Component {
  state = {
    unit: 'C',
    city: '',
    data: '',
    isLoading: false,
    netWorkError: false
  }
  changeUnit = (unit) => {
    //changing the unit of weather and wind speed
    this.setState({
      unit
    })
  }
  getWeather = (city) => {
    if (city !== '') {
      //show loading
      this.setState({
        isLoading: true,
        netWorkError: false
      });
      //weather config give us the url that we want
      axios.get(weatherConfig(city))
        .then(res => {
          //set data and hide loading
          this.setState({
            data: res.data,
            isLoading: false
          });
        }).catch(() => {
          this.setState({
            netWorkError: true,
            isLoading: false
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
    //check if loading should display
    const loading = this.state.isLoading ? (<Loader />) : (null);
    const networkError = this.state.netWorkError ? (<NetworkError />) : (null);

    return (
      <div className="App">
        <NavBar changeUnit={this.changeUnit} setCity={this.setCity} />
        <WeatherBox data={this.state.data} unit={this.state.unit} />
        {loading}
        {networkError}
        <div className="copy-right">Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a> and developed with &#10084;&#65039; by Ali Lotfi</div>
      </div>
    );
  }
}


export default App;
