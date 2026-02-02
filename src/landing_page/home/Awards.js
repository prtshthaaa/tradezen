import React from 'react';
import './css/awards.css';

function Awards() {
  return (
    <div className="awards-container my-5">
      <div className="row align-items-center">
        
        <div className="col-6 px-4">
          <img
            src="media/images/largestBroker.svg"
            alt="Awards illustration"
            width={600}
            className="award-img mb-4"
          />
        </div>

        <div className="col-6 px-4">
          <h1 className="mb-3">Largest stock broker in India</h1>

          <p className="mb-4">
            2+ million TradeZen clients contribute to over 15% of all
            retail order volumes in India daily by trading and investing in:
          </p>

          <div className="row mb-4">
            <div className="col-6">
              <ul className="list-spacing">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="list-spacing">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and securities</li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press logos"
            className="bottom-img"
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;
