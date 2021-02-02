import React from 'react'
import './Photos.css';

function Photos() {
    return (
        <div className="photos">
            <h1>What we prepare</h1>
            <div className="container1">
                <div className="image">
                <p>Dry fish</p>
                <img src="../images/fish.jpg" /> 
                   <h2>$700.00</h2>
                   <button className="btn">ORDER NOW</button>
                </div>
                <div className="image">
                <p>beef</p>    
                <img src="../images/beef.jpg" />
                   <h2>$400.00</h2>
                   <button className="btn">ORDER NOW</button>
                </div>
                <div className="image">
                <p>fried chicken</p>
                <img src="../images/chicken.jpg" />
                   <h2>$350.00</h2>
                   <button className="btn">ORDER NOW</button>
                </div>
            </div>

            <div className="container2">
                <div className="image1">
                <p>Chapati</p>
                <img src="../images/chapo.jpg" />
                   <h2>$100.00</h2>
                   <button className="btn">ORDER NOW</button>
                </div>
                <div className="image1">
                <p>bhajia</p>
                <img src="../images/bhajia.jpg" />
                   <h2>$150.00</h2>
                   <button className="btn">ORDER NOW</button>
                </div>
                <div className="image1">
                <p>pilau</p>
                <img src="../images/pilau.jpg" />
                   <h2>$300.00</h2>
                   <button className="btn">ORDER NOW</button>
                </div>
            </div>

            <div className="container3">
                <div className="image2">
                <p>beer</p>
                <img src="../images/beer.jpg" />
                   <h2>$200.00</h2>
                   <button className="btn">ORDER NOW</button>
                </div>
                <div className="image2">
                <p>cold milk</p>
                <img src="../images/milk.jpg" />
                   <h2>$100.00</h2>
                   <button className="btn">ORDER NOW</button>
                </div>
                <div className="image2">
                    
                <img src="../images/smoothie.jpg" />
                   <h2>$350.00</h2>
                   <button className="btn">ORDER NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Photos
