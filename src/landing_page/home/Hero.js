import React from 'react'
import './css/hero.css';

function Hero () {
    return ( 

    <div className ="container p-4 mb-5">
        <div className ="row text-center">
            <img src = 'media/images/hero4.png' alt ='Hero Image' width={100}  className ='mb-4'/>
            
         <div className="hero-content">
  <h1 className="mt-2 slide-down">Invest in everything</h1>
  <p className="slide-down delay-1">
    Online platform to invest in stocks, derivatives, mutual funds, and more
  </p>
  <button className="hero-btn mb-5 slide-down delay-2">
    Signup now
  </button>
</div>
        </div>


    </div>
);
}

export default Hero;