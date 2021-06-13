import React from 'react';
import { Link } from 'react-router-dom';
import coffee from './images/coffee.jpg';
import './Coffee.css';

const Coffee = () => {
    return (
        <div className="Coffee">
            <img src={coffee} alt="coffee" />
            <div>
                <Link exact to="/">
                    Go Back
                </Link>
            </div>
        </div>
    )
}

export default Coffee;