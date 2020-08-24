import React from 'react';
import '../css/NetworkError.min.css';
import errorSign from '../img/close.svg';

const NetworkError = () => {
    return (
        <div className="error-container">
         <img src={errorSign} alt="network error!"/>
         <p>please check your connection!</p>
        </div>
    )
};

export default NetworkError;