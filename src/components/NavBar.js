import React, { Component } from 'react';
import '../css/NavBar.css';
import axios from 'axios';

class NavBar extends Component {
    state = {
        data: []
    }
    handleChange = (e) => {
        if (e.target.value !== '') {
            axios.get(`http://autocomplete.travelpayouts.com/places2?term=${e.target.value}&locale=en&type=city`)
                .then(res => {
                    this.setState({
                        data: res.data
                    });
                });
        } else {
            this.setState({
                data: []
            });
        }
    }
    handleClick = (city) => {
        this.setState({
            data: []
        });
        this.props.setCity(city);
    }

    render() {
        let { data } = this.state;
        let autoCompleteList = null;
        if (data.length !== 0) {
            autoCompleteList =
                <div className="sugesstions">
                    {data.map(city => {
                        if (city.type === 'city') {
                            return (
                                <div className="city-item" key={Math.random()} onClick={() => { this.handleClick(city.name) }}>
                                    <p>{city.name} {city.country_name}</p>
                                </div>
                            )
                        } else {
                            return null;
                        }
                    })}
                </div>
        }

        return (
            <div className="nav">
                <h2 className="logo">Weather App</h2>
                <input className="city-search" placeholder="city name..." onChange={this.handleChange} />
                <div className="unit">
                    <span onClick={() => { this.props.changeUnit('C') }}>C</span>
                    <span>|</span>
                    <span onClick={() => { this.props.changeUnit('F') }}>F</span>
                </div>
                {autoCompleteList}

            </div>
        )
    }
}

export default NavBar;