import React from 'react'

function First() {
    return (
        <div>
            <div className="logo">
              <i className="fas fa-mountain"></i>
              <h4>Foodie</h4>
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
            <div className="showcase">
              <div className="showcase__buttons">
                <button className="showcase__btn-explore">EXPLORE</button>
                <button className="showcase__btn-menu">OUR MENU</button>
              </div>
            </div>
            
        </div>
    )
}

export default First
