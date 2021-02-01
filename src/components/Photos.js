import React from 'react'
import './Photos.css';

function Photos() {
    return (
        <div className="photos">
            <h1>What we prepare</h1>
            <div className="container1">
                <div className="image">
                <img src="../images/fish.jpg" />
                </div>
                <div className="image">
                <img src="../images/beef.jpg" />
                </div>
                <div className="image">
                <img src="../images/chicken.jpg" />
                </div>
            </div>

            <div className="container2">
                <div className="image1">
                <img src="../images/chapo.jpg" />
                </div>
                <div className="image1">
                <img src="../images/bhajia.jpg" />
                </div>
                <div className="image1">
                <img src="../images/pilau.jpg" />
                </div>
            </div>

            <div className="container3">
                <div className="image2">
                <img src="../images/beer.jpg" />
                </div>
                <div className="image2">
                <img src="../images/milk.jpg" />
                </div>
                <div className="image2">
                <img src="../images/smoothie.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Photos
