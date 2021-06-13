import React from 'react';
import { Link } from 'react-router-dom';
import fries from './images/fries.jpg';
import './fries.css';

const Fries = () => {
    return (
        <div className="Fries">
            <img src={fries} alt="fries" />
            <div>
                <Link exact to="/">
                    Go Back
                </Link>
            </div>
        </div>
    )
}

export default Fries;