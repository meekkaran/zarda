import React from 'react';
import './First.css';

function First() {
    return (
        <div className="container">
          <nav>
            <div className="logo">
              <i className="fas fa-mountain"></i>
              <h4>Zarda Cafe</h4>
            </div>
              <ul className="navlinks">
                <li className="link"><a href="/">Home</a></li>
                <li className="link"><a href="/About">About</a></li>
                <li className="link"><a href="#">Services</a></li>
                <li className="link"><a href="#">Contact Us</a></li>
            </ul>
            <div className="hamburger-toggle">
              <i className="fas fa-bars fa-lg"></i>
            </div>
          </nav>
            <div className="showcase">
              <h1>We've got you</h1>
                <h2>Your Swahili Delight</h2>
                <p>Get delicious swahili meals prepared well for you</p>
              <div className="showcase__buttons">
                <button className="showcase__btn-explore">EXPLORE</button>
                <button className="showcase__btn-menu">ORDER</button>
              </div>
            </div>
            
        </div>
    )
}

export default First
