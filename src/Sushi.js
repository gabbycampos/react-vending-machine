import React from 'react';
import { Link } from 'react-router-dom';
import sushi from './images/sushi.jpg';
import './Sushi.css';

const Sushi = () => {
    return (
        <div className="Coffee">
            <img src={sushi} alt="sushi" />
            <div>
                <Link exact to="/">
                    Go Back
                </Link>
            </div>
        </div>
    )
}

export default Sushi;