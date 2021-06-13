import React from 'react';
import { NavLink } from 'react-router-dom';
import vendingMachine from './images/vendingMachine.jpg';
import './VendingMachine.css'

const VendingMachine = () => {
    return (
        <div className="vending-machine">
            <div>
                <h1>Welcome! Get your snacks!!</h1>
            </div>

            <nav className="nav">
            <NavLink exact to="/fries">
                Fries
            </NavLink>
            <NavLink exact to="coffee">
                Coffee
            </NavLink>
            <NavLink exact to="sushi">
                Sushi
            </NavLink>
            </nav>

            <div>
                <img src={vendingMachine} alt="vending machines" />
            </div>
        </div>
    )
}

export default VendingMachine;