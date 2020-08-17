import React from 'react';
import '../css/Loader.min.css';

const Loader = () => {
    return (
        <div data-testid="dots-container" className="loader-container">
            <div className="loading"></div>
            <div className="loading"></div>
            <div className="loading"></div>
        </div>
    )
};

export default Loader;