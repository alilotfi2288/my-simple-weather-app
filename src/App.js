import React, { Component } from 'react';
import NavBar from './components/NavBar';
class App extends Component {
  state = {
    unit: '',
    city: ''
  }
  changeUnit = (unit) => {
    this.setState({
      unit
    })
  }
  setCity = (city) => {
    this.setState({
      city
    });
  }
  render() {
    return (
      <div className="App">
      <NavBar changeUnit={this.changeUnit} setCity={this.setCity}/>
      </div>
    );
  }
}


export default App;
