import React from 'react'
import './css/hero.css';

function Hero () {
    return ( 

    <div className ="container p-4 mb-5">
        <div className ="row text-center">
            <img src = 'media/images/homeHero.png' alt ='Hero Image' width={1200} className ='mb-4'/>
            
            <h1 className ='mt-5'>Invest in everything</h1>
            <p >Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className='hero-btn mb-5'>Signup now</button>
        </div>


    </div>
);
}

export default Hero;